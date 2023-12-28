const MaintenanceReqItem = (props) => {
  const { id, request_date, description, priority, category, image_url, permission, status } = props.mainte_request;

  return (
    <tr>
      <td>{id}</td>
      <td>{request_date}</td>
      <td>{description}</td>
      <td>{priority}</td>
      <td>{category}</td>
      <td>{image_url}</td>
      <td>{permission}</td>
      <td><span class="badge badge-warning">{status}</span></td>
    </tr>
  );
};

export default MaintenanceReqItem;