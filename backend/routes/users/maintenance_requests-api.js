const express = require('express');
const router = express.Router();
const maintenance_requests = require('../../db/queries/maintenance_requests');

router.post('/api/maintenance-requests', async (req, res) => {
    try {
      const { user_id, description, priority, category, image_url, permission, status, feedback } = req.body;
      const newRequest = await createRequest({ user_id, description, priority, category, image_url, permission, status, feedback });
      res.status(201).json(newRequest);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  });
  router.get('/api/maintenance-requests', async (req, res) => {
    try {
      const requests = await maintenance_requests.getAllRequests();
      res.json(requests);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  });
  
  router.get('/api/maintenance-requests/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const request = await maintenance_requests.getRequestById(id);
      if (!request) {
        return res.status(404).json({ message: "Request not found" });
      }
      res.json(request);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  });
  router.get('/api/maintenance-requests/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const request = await maintenance_requests.getRequestById(id);
      if (!request) {
        return res.status(404).json({ message: "Request not found" });
      }
      res.json(request);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  });
  router.delete('/api/maintenance-requests/:id', async (req, res) => {
    const id = req.params.id;
    try {
      const deletedRequest = await maintenance_requests.deleteRequest(id);
      if (!deletedRequest) {
        return res.status(404).json({ message: "Request not found" });
      }
      res.json({ message: "Request deleted successfully" });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  });
  module.exports = router;

  
