const User = require('../models/user.model');
const accessSpreadsheet = require('../utils/sheets');

async function addAllUserToDB(req, res) {
  try {

    const sheetData = await accessSpreadsheet('แบ่งสายน้องIT#30', 'A2', 'J115');

    const rows = sheetData.data.values;

    if (rows.length) {
      const users = rows.map((row) => ({
        student_id: row[0] || null,
        name: row[2] || null,
        house_name: row[4] || null,
        code: row[5] || null,
        hint_1: row[6] || null,
        hint_2: row[7] || null,
        hint_3: row[8] || null,
        hint_4: row[9] || null,
      }));

      await User.insertMany(users);

      res.status(200).json({ message: 'Users added successfully!' });
    } else {
      res.status(404).json({ message: 'No data found in the sheet.' });
    }
  } catch (error) {
    console.error('Error adding users to database:', error);
    res.status(500).json({ message: 'Failed to add users to database.', error });
  }
}

module.exports = { addAllUserToDB };
