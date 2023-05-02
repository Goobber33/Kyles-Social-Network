const { User } = require('../models');

const userController = {

  // Get all users

  async getAllUsers(req, res) {
    try {
      const users = await User.find({}).populate('thoughts').populate('friends');
      res.json(users);
    } catch (err) {
      console.error('Error in getAllUsers:', err);
      res.status(500).json(err);
    }
  },

  // Get a single user by its _id

  async getUserById(req, res) {
    try {
      const user = await User.findById(req.params.id).populate('thoughts').populate('friends');
      res.json(user);
    } catch (err) {
      console.error('Error in getUserById:', err);
      res.status(500).json(err);
    }
  },

  // Create a new user

  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      console.error('Error in createUser:', err);
      res.status(400).json(err);
    }
  },


};

module.exports = userController;
