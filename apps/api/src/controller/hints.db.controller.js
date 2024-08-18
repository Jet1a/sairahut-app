const revealSchedule = require('../config/revealSchedule');
const User = require('../models/user.model');

const getHintsByCode = async (req, res) => {
  try {
    const id = '67130500'.concat(req.body.student_id);
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

module.exports = {
  getHintsByCode,
};
