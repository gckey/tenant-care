import { useEffect, useState } from "react";
import { Link, Outlet } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { GrHostMaintenance } from "react-icons/gr";
import MaintenanceReqItem from "./MaintenanceReqItem";
import { useNavigate } from "react-router-dom";

const MaintenanceReqList = (props) => {

  const [listOfMaintenanceReqts, setListOfMaintenanceReqts] = useState([]);
  const navigate = useNavigate();

  const addingMainteRequest = (newMaintenReq) => {
    setListOfMaintenanceReqts(prevList => [...prevList], newMaintenReq);
  }

  const fetchMainteReq = async () => {
    const URL = `http://localhost:8080/api/maintenance-requests/user/${props.userInfo.user.id}`;
    const settings = {
      method: "GET"
    };
    const response = await fetch(URL, settings);
    const data = await response.json();


    setListOfMaintenanceReqts(data);

  };

  useEffect(() => {
    fetchMainteReq();
    const interval = setInterval(() => {
      fetchMainteReq();
    }, 5000);
    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // handle delete function
  const handleDelete = async (id) => {
    try {
      const URL = `http://localhost:8080/api/maintenance-requests/${id}`;
      const settings = {
        method: "DELETE",
      };
      const response = await fetch(URL, settings);

      if (response.ok) {
        // Remove the deleted item from the list
        setListOfMaintenanceReqts(prevList =>
          prevList.filter(request => request.id !== id)
        );
      } else {
        console.error("Failed to delete request");
      }
    } catch (error) {
      console.error("Error deleting request:", error);
    }
  };

  // Function to handle edit
  const handleEdit = (id) => {
    // Redirect to the edit page with the maintenance request id
    fetchMainteReq();
    navigate(`/maintenance-request/edit/${id}`);

  };

  return (
    <div className="container">
      <h4><FaUser />
        <strong>Hello {props.userInfo.user.first_name} !<br />{props.userInfo.user.street}</strong>
      </h4>

      <br />
      <h2><GrHostMaintenance />Maintenance Request History</h2>
      <div className="well">
        <Link to="/maintenance-request/new">
          <button className="btn btn-success">+ New Maintenance Request</button>
        </Link>
      </div>
      <table className="maintenanceReqList">
        <thead>
          <tr>
            <th>Id</th>
            <th>Date</th>
            <th>Description</th>
            <th>Priority</th>
            <th>Category</th>
            <th>Picture</th>
            <th>Permission to Enter Site</th>
            <th>Edit or Delete</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {listOfMaintenanceReqts.map((mainte_request, index) => (
            <MaintenanceReqItem
              key={index}
              mainte_request={mainte_request}
              onDelete={() => handleDelete(mainte_request.id)}//pass onDelete prop
              onEdit={() => handleEdit(mainte_request.id)}//pass onEdit prop

            />
          ))}
        </tbody>
      </table>
      <br />
      <Outlet addingMainteRequest={addingMainteRequest}
      />
    </div>
  );
};

export default MaintenanceReqList;