const express = require('express');
const usersController = require('../controllers/usersController');

const router = express.Router();
// Endpoint for fetching users data from the JSONPlaceholder API
router.get('/users', usersController.getUsers);
// Endpoint for filtering by username
router.get('/users/:username', usersController.filterUserByUsername);

module.exports = router;
