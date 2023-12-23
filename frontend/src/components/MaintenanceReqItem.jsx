const MaintenanceReqItem = (props) => {

  return (
    
    <div className="maintenanceReqItem content-container">
      
      <h4>{props.id}</h4>
      <h4>{props.description}</h4>
      <h4>{props.status}</h4>

    </div>

  );

}

export default MaintenanceReqItem;