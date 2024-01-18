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
            <select
              type="text"
              name="priority"
              id="priority"
              value={priorityVal}
              onChange={e => setPriorityVal(e.target.value)}
            >
              <option value="">--Please choose priority--</option>
              <option value="Low">Low</option>
              <option value="Normal">Normal</option>
              <option value="High">High</option>
              <option value="Critical">Critical</option>
            </select>
          </div>
          <br />
          <div>
            <label htmlFor="category">
              Category:
            </label>
            <select
              type="text"
              name="category"
              id="category"
              value={categoryVal}
              onChange={e => setCategoryVal(e.target.value)}
            >
              <option value="">--Please choose category--</option>
              <option value="HVAC">HVAC</option>
              <option value="Electrical">Electrical</option>
              <option value="Plumbing">Plumbing</option>
              <option value="Elevator">Elevator</option>
              <option value="Flooring">Flooring</option>
              <option value="Roofing">Roofing</option>
              <option value="Pest-control">Pest Control</option>
              <option value="Janitorial">Janitorial</option>
              <option value="Appliances">Appliances</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <br />
          <div>
            <label htmlFor="description">
              Maintenance Request Details:
            </label>
            <textarea
              className="description_input"
              // type="text"
              id="description"
              name="description"
              value={descriptionVal}
              onChange={e => setDescriptionVal(e.target.value)}>
            </textarea>
          </div>
          <br />
          <div>
            <label htmlFor="permissionToEnter">
              Permission to Enter Site:
            </label>
            <select
              type="text"
              name="permissionToEnter"
              id="permissionToEnter"
              value={permissionToEnterVal}
              onChange={e => setPermissionToEnterVal(e.target.value)}
            >
              <option value="">--Please choose yes or no--</option>
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </div>
          <br />
          <div>
            <label htmlFor="pic">
              Choose Picture To Upload:
            </label>
            <input
              type="text"
              id="pic"
              name="pic"
              value={picVal}
              onChange={e => setPicVal(e.target.value)}
            />
          </div>
          <br /><br />
          <button className="btn btn-primary">Submit Edit</button>
        </form>
      </div>
    </div>
  );
};

export default MaintenanceReqEditForm;