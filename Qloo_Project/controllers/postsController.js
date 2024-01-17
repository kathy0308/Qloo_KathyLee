const postsService = require('../services/postsService');

const getPosts = async (req, res) => {
  try {
    const posts = await postsService.getPosts();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const filterPostsByUserId = async (req, res) => {
  const { userId } = req.params;

  try {
    if (!isValidUserId(userId)) {
      return res.status(400).json({ error: 'Invalid userId' });
    }

    const filteredPosts = await postsService.filterPostsByUserId(userId);

    // Check if there are no matching entries
    if (filteredPosts === null) {
      return res.status(404).json({
        error: `No data found for userId ${userId}.`,
      });
    }

    res.json(filteredPosts);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Helper function to validate userId
const isValidUserId = (userId) => {
  // Assuming userId should be a positive integer
  const regex = /^[1-9]\d*$/;
  return regex.test(userId);
};

const getUserPostsCount = async (req, res) => {
  const { userId } = req.params;

  try {
    
    if (!isValidUserId(userId)) {
      console.log('Invalid userId');
      return res.status(400).json({ error: 'Invalid userId' });
    }

    const postCount = await postsService.getPostCountByUserId(userId);

    res.json({ [userId]: postCount });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getPosts,
  filterPostsByUserId,
  getUserPostsCount,
};
