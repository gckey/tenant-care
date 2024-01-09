import { useEffect, useState } from "react";
import { Link, Outlet } from 'react-router-dom';
import MaintenanceReqItem from "./MaintenanceReqItem";

const MaintenanceReqList = (props) => {
  
  const [listOfMaintenanceReqts, setListOfMaintenanceReqts] = useState([]);

  const addingMainteRequest = (newMaintenReq) => {
    setListOfMaintenanceReqts(prevList => [...prevList], newMaintenReq);
  }
  
  useEffect(() => {
    const fetchMainteReq = async () => {
      const URL = `http://localhost:8080/api/maintenance-requests/${props.userInfo.user.id}`;
      const settings = {
        method: "GET"
      };
      const response = await fetch(URL, settings);
      const data = await response.json();

 
      setListOfMaintenanceReqts(data);

    }
    fetchMainteReq();
    const intervalId = setInterval(() => {
      fetchMainteReq(); // function to fetch data from server
  }, 5000); // Fetch data every 5 seconds

  return () => clearInterval(intervalId);
}, []);

  return (
    <div>
      <h4>
      <strong>Hello {props.userInfo.user.first_name} !<br/>{props.userInfo.user.street}</strong>
      </h4>
      
      <br />
      <h2>Maintenance Request History</h2>
      <table className="maintenanceReqList">
        <thead>
          <tr>
            <th>Id</th>
            <th>Date</th>
            <th>Description</th>
            <th>Priority</th>
            <th>Category</th>
            <th>Picture</th>
            <th>Permission to Enter</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {listOfMaintenanceReqts.map((mainte_request, index) => (
            <MaintenanceReqItem mainte_request={mainte_request} key={index} />
          ))}
        </tbody>
      </table>
      <br />
        <Link to="/maintenance-request/new">
          Report Issue
        </Link>
        <Outlet addingMainteRequest={addingMainteRequest} />
    </div>
  );
};

export default MaintenanceReqList;