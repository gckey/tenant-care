import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './dashboard.css'; // Ensure this path is correct

const AdminDashboard = () => {
    const [activeRequests, setActiveRequests] = useState([]);
    const [historicalRequests, setHistoricalRequests] = useState([]);
    const [requests, setRequests] = useState([]);
    const [currentView, setCurrentView] = useState('active'); // Possible values: 'active', 'history'

  
        const fetchRequests = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/maintenance-requests/');
                const fetchedRequests = response.data;

                // Categorize requests into active and historical
                const active = fetchedRequests.filter(req => req.status !== 'Resolved');
                const history = fetchedRequests.filter(req => req.status ==='Resolved');

                setActiveRequests(active);
                setHistoricalRequests(history);
            } catch (error) {
                console.error('Error fetching maintenance requests:', error);
            }
        };

        useEffect(() => {
         fetchRequests();
    }, []);

    const handleStatusChange = async (e, requestId) => {
        e.preventDefault();
        const newStatus = e.target.value;

        
    try {
        // Send PATCH request to update the status
        const response = await axios.patch(`http://localhost:8080/api/maintenance-requests/${requestId}/status`, { status: newStatus });
        
      
        // Update the status in the local state if the request was successful
        const updatedRequests = requests.map(request => 
            request.id === requestId ? { ...request, status: newStatus } : request
        );
        setRequests(updatedRequests);
        fetchRequests(); 
        // Optionally, you can show a success message or handle the response
        console.log('Status updated:', response.data);

    } catch (error) {
        console.error('Error updating request status:', error);
        // Handle error (e.g., show error message to the user)
    }
};

    const renderRequestsTable = (requests) => (
        
       
        <table>
            <thead>
                <tr> 
                    <th>Full Name</th>
                    <th>ID</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Priority</th>
                    <th>Request Date</th>
                    <th>User ID</th>
                    <th>Permission</th>
                    <th>Feedback</th>
                    <th>Image</th>
                </tr>
            </thead>
            <tbody>
                {requests.map(request => (
                   <tr key={request.id} className={`priority-${request.priority ? request.priority.toLowerCase() : ''}`}>
                      <td>{`${request.first_name} ${request.last_name}`}</td>
                        <td>{request.id}</td>
                        <td>{request.category}</td>
                        <td>{request.description}</td>
                        <td>
                            <select 
                                value={request.status}
                                onChange={(e) => handleStatusChange(e, request.id)}
                            >
                                <option value="New">New</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Assigned">Assigned</option>
                                <option value="Resolved">Resolved</option>
                                                                                         
                            </select>
                        </td>
                        <td>{request.priority}</td>
                        <td>{new Date(request.request_date).toLocaleDateString()}</td>
                        <td>{request.user_id}</td>
                        <td>{request.permission}</td>
                        <td>{request.feedback || 'N/A'}</td>
                        <td>    
                            {request.image_url ? (
                                <img src={request.image_url} alt="Request" style={{ maxWidth: '300px', maxHeight: '300px' }} />
                            ) : (
                                'None'
                            )}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );

    return (
        <div className="container">
            <h1>Admin Dashboard</h1>
            <button onClick={() => setCurrentView('active')}>Active Requests</button>
            <button onClick={() => setCurrentView('history')}>History Requests</button>
             
            {currentView === 'active' ? (
               <div>
            <h2>Active Requests</h2>
            {activeRequests.length > 0 ? renderRequestsTable(activeRequests) : <p>No active requests found.</p>}
             </div>
           ) : (  <div>
            <h2>Historical Requests</h2>
            {historicalRequests.length > 0 ? renderRequestsTable(historicalRequests) : <p>No historical requests found.</p>}
        </div>
    )}
    </div>
    );
};

export default AdminDashboard;
