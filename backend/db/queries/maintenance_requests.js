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
  //Update Maintenance Request By Id 
  const updateRequest = async (id, updatedFields) => {
    const fieldNames = Object.keys(updatedFields);
    const fieldValues = fieldNames.map((fieldName, index) => `$${index + 2}`); // Start index at 2 to account for id at index 1
  
    const updateRequestQuery = `
      UPDATE maintenance_requests 
      SET ${fieldNames.map((fieldName, index) => `${fieldName} = ${fieldValues[index]}`).join(', ')}
      WHERE id = $1
      RETURNING *;
    `;
  
    const updatedRequest = await db.query(updateRequestQuery, [id, ...Object.values(updatedFields)]);
    return updatedRequest.rows[0];
  };

  const deleteRequest = async (id) => {
    const deleteRequestQuery = 'DELETE FROM maintenance_requests WHERE id = $1 RETURNING *;';
    const deletedRequest = await db.query(deleteRequestQuery, [id]);
    return deletedRequest.rows[0];
  };

//Maint Req history by user ID
const getMainteReqByUserId = async (userId) => {
  try {
    const query = `
      SELECT *
      FROM maintenance_requests
      WHERE user_id = $1;
    `;
    const result = await db.query(query, [userId]);
    return result.rows;
  } catch (err) {
    throw new Error(`Error retrieving maintenance requests: ${err.message}`);
  }
};

module.exports = { createRequest, getAllRequests, getRequestById, getMainteReqByUserId, updateRequest, deleteRequest };
  