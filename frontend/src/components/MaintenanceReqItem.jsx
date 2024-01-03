import { BiTrash } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";

const MaintenanceReqItem = (props) => {
  const { id, request_date, description, priority, category, image_url, permission, action, status } = props.mainte_request;

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
      <td><span className="badge badge-warning">{status}</span></td>
    </tr>
  );
};

export default MaintenanceReqItem;