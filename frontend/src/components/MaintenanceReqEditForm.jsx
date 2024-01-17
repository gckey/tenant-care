import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const MaintenanceReqEditForm = () => {
  const { id } = useParams(); //get ID from URL params
  const navigate = useNavigate();

  const [priorityVal, setPriorityVal] = useState("");
  const [categoryVal, setCategoryVal] = useState("");
  const [descriptionVal, setDescriptionVal] = useState("");
  const [permissionToEnterVal, setPermissionToEnterVal] = useState("");
  const [statusVal, setStatusVal] = useState("");
  const [picVal, setPicVal] = useState("");

  useEffect(() => {
    // Fetch the maintenance request details based on the ID
    const fetchMaintenanceRequest = async () => {
      try {
        const URL = `http://localhost:8080/api/maintenance-requests/${id}`;
        const response = await fetch(URL);
        const data = await response.json();

        //set the state with the fetched data
        setPriorityVal(data.priority);
        setCategoryVal(data.category);
        setDescriptionVal(data.description);
        setPermissionToEnterVal(data.permission);
        setStatusVal(data.status);
        setPicVal(data.image_url);
      } catch (error) {
        console.error("Error fetching maintenance request:", error);
      }
    };

    fetchMaintenanceRequest();
  }, [id]); //run the effect whenever id changes

  const handleSumbit = async (event) => {
    event.preventDefault();
    const URL = `http://localhost:8080/api/maintenance-requests/${id}`;
    const settings = {
      method: "PUT",
      body: JSON.stringify({
        priority: priorityVal,
        category: categoryVal,
        description: descriptionVal,
        permission: permissionToEnterVal,
        image_url: picVal,
        status: statusVal,
      }),
      headers: {
        "Content-type": "application/json",
      },
    };

    const response = await fetch(URL, settings);
    const data = await response.json();
    navigate("/maintenance-request"); //redirect to maintenance request list page
  };

  return (
    <div>
      <div className="maintenanceRequest">
        <h2>Edit Maintenance Request</h2>
        <form onSubmit={handleSumbit}>
          <div>
            <label htmlFor="priority">
              Priority:
            </label>
            <input
              type="text"
              id="priority"
              name="priority"
              value={priorityVal}
              onChange={e => setPriorityVal(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="category">
              Category:
            </label>
            <input
              type="text"
              id="category"
              name="category"
              value={categoryVal}
              onChange={e => setCategoryVal(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="description">
              Description:
            </label>
            <input
              type="text"
              id="description"
              name="description"
              value={descriptionVal}
              onChange={e => setDescriptionVal(e.target.value)}
            />
          </div>   

          <div>
            <label htmlFor="permissionToEnter">
              Permission to Enter:
            </label>
            <input
              type="text"
              id="permissionToEnter"
              name="permissionToEnter"
              value={permissionToEnterVal}
              onChange={e => setPermissionToEnterVal(e.target.value)}
            />
          </div>         
          
          <div>
            <label htmlFor="pic">
              Choose pic to upload:
            </label>
            <input
              type="text"
              id="pic"
              name="pic" 
              value={picVal}
              onChange={e => setPicVal(e.target.value)}
            />
          </div>
          <br /><br/>

          <button className="btn btn-primary">Submit Edit</button>
        </form>
      </div>
    </div>
  );
};

export default MaintenanceReqEditForm;