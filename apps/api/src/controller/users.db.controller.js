const User = require('../models/user.model');
const revealSchedule = require('../config/revealSchedule');

// For client
const getUserById = async (req, res) => {
  try {
    const id = '67130500'.concat(req.query.student_id);
    const data = await User.findOne({ student_id: id });

    if (!data) {
      return res.status(404).json({
        status: 'error',
        message: 'Data not found for the provided student_id',
      });
    }

    const now = new Date();

    let response = {
      student_id: data.student_id,
      name: data.name,
      house_name: data.house_name,
    };

    revealSchedule.forEach((schedule) => {
      if (now >= schedule.date) {
        schedule.fields.forEach((field) => {
          response[field] = data[field];
        });
      }
    });

    res.status(200).json({
      status: 'success',
      data: response,
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: 'error',
      message: 'An error occurred while processing the request',
    });
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

// For admin
const updateUser = async (req,res) => {
  try{
    const result = await User.findOneAndUpdate(
      { student_id: req.body.student_id },
      req.body,
      { new:true }
    );

    result
    ? result.json({message: "User updated successfully", data: result})
    : res.status(404).json({message: "User not found"})
  }catch(err){
    console.err(err.message);
    res.status(500).json({ message: 'An error occurred while updating the user' });
  }
}

// For admin
const deleteUser = async (req,res) => {
  try{
    const results = await User.findOneAndDelete(
      { student_id:req.body.student_id}
    );
    results
    ? res.json({message:"User deleted successfully",data:results})
    : res.status(404).json({message:"User not found"})
  }catch(err){
    console.err(err.message)
    res.status(500).json({message:"An error occurred while deleting the user"})
  }
}

module.exports = {
  getUserById,
  getAllUsers,
  addUser,
  updateUser,
  deleteUser,
};
