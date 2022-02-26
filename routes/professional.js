const express = require('express');

const professionalController = require('../controllers/professional');

const router = express.Router();

// GET /feed/posts
router.get('/professional', professionalController.getProfessional);

// POST /feed/post
// router.post('/post', feedController.createPost);

module.exports = router;