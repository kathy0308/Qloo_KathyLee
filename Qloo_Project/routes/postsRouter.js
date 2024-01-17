const express = require('express');
const postsController = require('../controllers/postsController');

const router = express.Router();
// Endpoint for fetching posts data from the JSONPlaceholder API
router.get('/posts', postsController.getPosts);
// Endpoint for filtering by userId
router.get('/posts/:userId', postsController.filterPostsByUserId);
// Endpoint for couting the number of posts by userId
router.get('/posts/postCount/:userId', postsController.getUserPostsCount);

module.exports = router;
