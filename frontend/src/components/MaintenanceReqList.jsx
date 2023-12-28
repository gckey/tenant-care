import { useEffect, useState } from "react"
import MaintenanceReqItem from "./MaintenanceReqItem";

const MaintenanceReqList = (props) => {
  
  const [listOfMaintenanceReqts, setListOfMaintenanceReqts] = useState([]);

  
  useEffect(() => {
    const fetchMainteReq = async () => {
      const URL = `http://localhost:8080/api/maintenance-requests/${props.userInfo.user.id}`;
      const settings = {
        method: "GET"
      };
      const response = await fetch(URL, settings);
      const data = await response.json();

      console.log(data);
      setListOfMaintenanceReqts(data);

    }
    fetchMainteReq();
  }, []);

  return (
    <div>
      <h3>
        Welcome <strong>{props.userInfo.user.email}!</strong>
      </h3>
      
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
    </div>
  );
};

export default MaintenanceReqList;