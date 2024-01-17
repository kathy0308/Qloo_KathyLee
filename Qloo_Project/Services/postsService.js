const axios = require('axios');

const getPosts = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch posts');
  }
};

const filterPostsByUserId = async (userId) => {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    const filteredData = response.data;

    // Check if there are any matching entries
    if (filteredData.length === 0) {
      return null; // Indicate no matching entries
    }

    return filteredData;
  } catch (error) {
    throw new Error('Failed to fetch filtered posts');
  }
};

const getPostCountByUserId = async (userId) => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
      return response.data.length;
    } catch (error) {
      throw new Error('Failed to fetch post count');
    }
  };
  
  module.exports = {
    getPosts,
    filterPostsByUserId,
    getPostCountByUserId,
  };