const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');

// Route to add a new job application
router.post('/jobs', jobController.addJob);

// Route to get all job applications
router.get('/jobs', jobController.getAllJobs);

// Route to update the status of a job application
router.put('/jobs/:id', jobController.updateJobStatus);

// Route to delete a job application
router.delete('/jobs/:id', jobController.deleteJob);

module.exports = router;