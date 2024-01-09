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
    const allRequestsQuery =  `SELECT mr.*, u.first_name, u.last_name
    FROM maintenance_requests mr
    JOIN Users u ON mr.user_id = u.id`;

    const allRequests = await db.query(allRequestsQuery);
    return  allRequests.rows;
  };
  const getRequestById = async (id) => {
    const requestQuery = 'SELECT * FROM maintenance_requests WHERE user_id = $1;';
    const request = await db.query(requestQuery, [id]);
    return request.rows[0];
  };
  const updateRequest = async (id, { description, priority, category, image_url, permission }) => {
    const updateRequestQuery = `
        UPDATE maintenance_requests 
        SET 
            description = $1, 
            priority = $2, 
            category = $3, 
            image_url = $4, 
            permission = $5
        WHERE 
            id = $6 
        RETURNING *;
    `;

    const updatedRequest = await db.query(updateRequestQuery, [description, priority, category, image_url, permission, id]);
    return updatedRequest.rows[0];
};
 const deleteRequest = async (id) => {
    const deleteRequestQuery = 'DELETE FROM maintenance_requests WHERE id = $1 RETURNING *;';
    const deletedRequest = await db.query(deleteRequestQuery, [id]);
    return deletedRequest.rows[0];
  };

  const updateRequestStatus = async (requestId, newStatus) => {
    try {
        const query = 'UPDATE maintenance_requests SET status = $1 WHERE id = $2';
        const values = [newStatus, requestId];
        await db.query(query, values);
    } catch (error) {
        console.error('Error updating status:', error);
        throw error;
    }
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

module.exports = { createRequest, getAllRequests, getRequestById,  updateRequestStatus, getMainteReqByUserId, updateRequest, deleteRequest };
  