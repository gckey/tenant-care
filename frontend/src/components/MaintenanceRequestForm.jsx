/**
 * Displays a form with an input and a button = onSubmit
 * @param {text, onSubmit} props
 * @returns 
 */

const MaintenanceRequestForm = (props) => {

  return (
    <div>
      <div className="MaintenanceRequest">
        <h2>Maintenance Request Form</h2>
        <form>
          <div>
            <label htmlFor="maintenReqId">
              Id:
            </label>
              <input
                type="number"
                id="maintenReqId"
                name="id"
              />
            </div>
          <div>
            <label htmlFor="maintenReqDescription">
              Description:
            </label>
              <input
                type="text"
                id="maintenReqDescription"
                name="description"
              />
            </div>            
            <div>
            <label htmlFor="maintenReqStatus">
              Status:
            </label>
              <input
                type="text"
                id="maintenReqStatus"
                name="Status"
              />
            </div>
            <button className="btn btn-primary">
              Submit
            </button>
        </form>
      </div>
    </div>
  );
};

export default MaintenanceRequestForm;