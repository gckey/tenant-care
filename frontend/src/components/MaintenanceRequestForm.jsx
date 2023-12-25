/**
 * Displays a form with an input and a button = onSubmit
 * @param {text, onSubmit} props
 * @returns 
 */

const MaintenanceRequestForm = (props) => {

  return (
    <div>
      <div className="maintenanceRequest">
        <h2>Maintenance Request Form</h2>
        <form>
          <div>
            <label htmlFor="priority">
              Priority:
            </label>
            <input
              type="text"
              id="priority"
              name="priority"
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
            />
          </div>         
          
          <div>
            <label htmlFor="pic">
              Choose pic to upload:
            </label>
            <input
              type="file"
              id="pic"
              name="pic" 
            />
            <input type="submit" />
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