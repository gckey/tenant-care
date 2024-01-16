/**
 * Displays a form with an input and a button = onSubmit
 * @param {text, onSubmit} props
 * @returns 
 */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MaintenanceRequestForm = (props) => {

  const [priorityVal, setPriorityVal] = useState("low");
  const [categoryVal, setCategoryVal] = useState("");
  const [descriptionVal, setDescriptionVal] = useState("");
  const [permissionToEnterVal, setPermissionToEnterVal] = useState("No");
  const [statusVal, setStatusVal] = useState("Not Started");
  const [picVal, setPicVal] = useState("");
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
  console.log(props);
  const navigate = useNavigate();

  const handleSumbit = async (event) => {
    event.preventDefault();
    const URL = "http://localhost:8080/api/maintenance-requests/";
    const settings = {
        method: "POST",
        body: JSON.stringify({
            priority: priorityVal,
            category: categoryVal,
            description: descriptionVal,
            permission: permissionToEnterVal,            
            image_url: picVal,
            status: statusVal,
            user_id: localStorage.getItem("user_id")
        }),
        headers: {
            "Content-type": "application/json"
        }
    }
  
    const response = await fetch(URL, settings);
    console.log(Response);
    const data = await response.json();
    navigate("/maintenance-request");

    if (data.success) {
        console.log('successful:', data.message);
        // Further actions on successful login (e.g., redirect, store user data)
    } else {
        console.log('failed:', data.message);
        // Handle login failure (e.g., show error message)
    }
  }
 
  return (
    <div>
      <div className="maintenanceRequest">
        <h2>Maintenance Request Form</h2>
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
              <option value="low">Low</option>
              <option value="normal">Normal</option>
              <option value="high">High</option>
              <option value="critical">Critical</option>
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
              <option value="hvac">HVAC</option>
              <option value="electrical">Electrical</option>
              <option value="plumbing">Plumbing</option>
              <option value="elevator">Elevator</option>
              <option value="flooring">Flooring</option>
              <option value="roofing">Roofing</option>
              <option value="pest-control">Pest Control</option>
              <option value="janitorial">Janitorial</option>
              <option value="countertops">Countertops</option>
            </select>
          </div>
          <br />
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
              type="Text"
              id="pic"
              name="pic" 
              value={picVal}
              onChange={e => setPicVal(e.target.value)}
            />
             {imagePreviewUrl && <img src={imagePreviewUrl} alt="Preview" />} {/* Image preview */}
          
            {/* <input type="submit" /> */}
          </div>
          <br /><br/>


            <button className="btn btn-primary">
              Submit
            </button>
        </form>
      </div>
    </div>
  );
};

export default MaintenanceRequestForm;