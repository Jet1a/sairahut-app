const User = require('../models/user.model');

// For client
const getUserById = async (req, res) => {
  try {
    const id = '67130500'.concat(req.body.student_id);
    const data = await User.findOne({ student_id: id });

    if (!data) {
      return res.status(404).json({
        status: 'error',
        message: 'Data not found for the provided student_id',
      });
    }

    let response = {
      student_id: data.student_id,
      name: data.name,
      house_name: data.house_name,
    };

    res.status(200).json({
      status: 'success',
      data: response,
    });

  } catch (err) {
    console.log(err);
    res.json({});
  }
};

// For admin 
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

// For admin
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

module.exports = {
  getAllUsers,
  getUserById,
  addUser,
};
