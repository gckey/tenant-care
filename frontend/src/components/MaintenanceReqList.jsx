import { useState } from "react"
import { MaintenanceRequestItems } from "../mock-data/MaintenanceRequestItems" 
import MaintenanceReqItem from "./MaintenanceReqItem";
import MaintenanceRequestForm from "./MaintenanceRequestForm";

const MaintenanceReqList = (props, user) => {
  // console.log(props);
  const [listOfMaintenanceReqts, setListOfMaintenanceReqts] = useState(MaintenanceRequestItems);
  console.log(listOfMaintenanceReqts);

  const addingMainteRequest = (newMaintenReq) => {
    setListOfMaintenanceReqts(prevList => [...prevList], newMaintenReq);
  }

  return (
    <div>
      <h2>
        Welcome <strong>{props.userInfo.user.first_name} {props.userInfo.user.last_name}!</strong>
      </h2>
      <MaintenanceRequestForm 
        addingMainteRequest={addingMainteRequest}
      />
      <br />
      <h2>Maintenance Request History</h2>
      <div className="maintenanceReqList">
        {listOfMaintenanceReqts.map((mainte_request, index) => {
          return (
            <MaintenanceReqItem
              id={mainte_request.id}
              description={mainte_request.description}
              status={mainte_request.status}
              
              key={index} 
            />
          );
        })}
      </div>
    </div>
  );
}

export default MaintenanceReqList;