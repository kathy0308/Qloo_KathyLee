const usersService = require('../services/usersService');

const getUsers = async (req, res) => {
  try {
    const users = await usersService.getUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const filterUserByUsername = async (req, res) => {
  const { username } = req.params;

  try {
    const filteredUsers = await usersService.filterUserByUsername(username);

    if (filteredUsers.length === 0) {
      return res.status(404).json({
        error: `No user found with username ${username}.`,
      });
    }

    res.json(filteredUsers);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getUsers,
  filterUserByUsername,
};
