const axios = require('axios');

const getUsers = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch users');
  }
};

const filterUserByUsername = async (username) => {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users?username=${username}`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch user with username ${username}`);
  }
};

module.exports = {
  getUsers,
  filterUserByUsername,
};
