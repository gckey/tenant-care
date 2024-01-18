import { BiTrash } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";

const MaintenanceReqItem = (props) => {
  const { id, request_date, description, priority, category, image_url, permission, action, status } = props.mainte_request;

  let statusDisplay;
  if (status === "Assigned") {
    statusDisplay = <span className="label label-warning">{status}</span>
  } else if (status === "Not Started") {
    statusDisplay = <span className="label label-danger">{status}</span>
  } else if (status === "Resolved") {
    statusDisplay = <span className="label label-success">{status}</span>
  } else {
    statusDisplay = <span className="label label-primary">{status}</span>
  }
  return (
    <tr>
      <td>{id}</td>
      <td>{request_date}</td>
      <td>{description}</td>
      <td>{priority}</td>
      <td>{category}</td>
      <td>{image_url}</td>
      <td>{permission}</td>
      <td>
        {action}
        <FaEdit
          style={{ cursor: "pointer", marginRight: "35px" }}
          onClick={props.onEdit} //use onEdit prop
        />
        <BiTrash
          style={{ cursor: "pointer" }}
          onClick={props.onDelete}//use onDelete props
        />
      </td>
      <td>
        {statusDisplay}
      </td>
    </tr>
  );
};

export default MaintenanceReqItem;