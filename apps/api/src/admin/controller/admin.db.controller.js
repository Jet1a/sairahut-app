const User = require('../../models/user.model');

const getAllUsers = async (req, res) => {
    try {
      await User.find().then((result) => {
        res.json(result);
      });
    } catch (err) {
      console.log(err);
      res.json({});
    }
  };
  

  const addUser = async (req, res) => {
    try {
      const data = {
        student_id: req.body.student_id,
        name: req.body.name,
        house_name: req.body.house_name,
        code: req.body.code,
        hint_1: req.body.hint_1,
        hint_2: req.body.hint_2,
        hint_3: req.body.hint_3,
        hint_4: req.body.hint_4,
      };
  
      const user = new User(data);
      await user.save().then(() => res.json(data));
    } catch (err) {
      console.log(err.message);
      res.json({});
    }
  };
  

  const updateUser = async (req, res) => {
    try {
      const result = await User.findOneAndUpdate(
        { student_id: req.body.student_id },
        req.body,
        { new: true },
      );
  
      result
        ? res.json({ message: 'User updated successfully', data: result })
        : res.status(404).json({ message: 'User not found' });
    } catch (err) {
      console.error(err.message);
      res
        .status(500)
        .json({ message: 'An error occurred while updating the user' });
    }
  };
  
  const deleteUser = async (req, res) => {
    console.log('Received delete request for:', req.body.student_id);
    try {
      const result = await User.findOneAndDelete({
        student_id: req.body.student_id,
      });
      if (result) {
        res.json({ message: 'User deleted successfully', data: result });
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (err) {
      console.error(err.message);
      res
        .status(500)
        .json({ message: 'An error occurred while deleting the user' });
    }
  };
  
  module.exports = {
    getAllUsers,
    addUser,
    updateUser,
    deleteUser,
  };
