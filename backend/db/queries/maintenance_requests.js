const db = require('../connection');
const createRequest = async ({ user_id, description, priority, category, image_url, permission, status, feedback }) => {
    const newRequestQuery = `
      INSERT INTO maintenance_requests 
      (user_id, description, priority, category, image_url, permission, status, feedback) 
      VALUES 
      ($1, $2, $3, $4, $5, $6, $7, $8) 
      RETURNING *;
    `;
  
    const newRequest = await db.query(newRequestQuery, [user_id, description, priority, category, image_url, permission, status, feedback]);
    return newRequest.rows[0];
  };
  const getAllRequests = async () => {
    const allRequestsQuery = 'SELECT * FROM maintenance_requests;';
    const allRequests = await db.query(allRequestsQuery);
    return allRequests.rows;
  };
  const getRequestById = async (id) => {
    const requestQuery = 'SELECT * FROM maintenance_requests WHERE id = $1;';
    const request = await db.query(requestQuery, [id]);
    return request.rows[0];
  };
  const updateRequest = async (id, { user_id, description, priority, category, image_url, permission, status, feedback }) => {
    const updateRequestQuery = `
      UPDATE maintenance_requests 
      SET 
        user_id = $1, 
        description = $2, 
        priority = $3, 
        category = $4, 
        image_url = $5, 
        permission = $6, 
        status = $7, 
        feedback = $8 
      WHERE 
        id = $9 
      RETURNING *;
    `;
  
    const updatedRequest = await db.query(updateRequestQuery, [user_id, description, priority, category, image_url, permission, status, feedback, id]);
    return updatedRequest.rows[0];
  };
  const deleteRequest = async (id) => {
    const deleteRequestQuery = 'DELETE FROM maintenance_requests WHERE id = $1 RETURNING *;';
    const deletedRequest = await db.query(deleteRequestQuery, [id]);
    return deletedRequest.rows[0];
  };
  module.exports = {createRequest, getAllRequests,getRequestById,updateRequest,deleteRequest };
  