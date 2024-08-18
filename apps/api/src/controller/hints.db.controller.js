const User = require('../models/user.model');

// For client
const getHintsByCode = async (req, res) => {
  try {
    const id = '67130500'.concat(req.body.student_id);
    const data = await User.findOne({ Student_id: id }).then((result) => {
      res.json(result);
    });

    const { name, ...rest } = data;

  } catch (err) {
    console.log(err);
    res.json({});
  }
};

module.exports = {
    getHintsByCode,
}