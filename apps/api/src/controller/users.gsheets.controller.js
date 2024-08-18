const User = require('../models/user.model');
const accessSpreadsheet = require('../utils/sheets.utils');

async function updateAllUserToDB(req, res) {
  try {
    const sheetData = await accessSpreadsheet('สายรหัสน้องIT#30', 'A2', 'J115');
    const rows = sheetData.data.values;
    const schemaKeys = Object.keys(User.schema.obj);

    if (rows.length) {
      const includeIndex = [0, 3, 4, 5, 6, 7, 8, 9]; 
      const updates = [];

      for (const row of rows) {
        const mappedData = includeIndex.map((index) => row[index]);
        let user = {};

        schemaKeys.forEach((key, keyIndex) => {
          user[key] = mappedData[keyIndex] || null;
        });

        const updatedUser = await User.findOneAndUpdate(
          { student_id: user.student_id },
          user,
          { new: true, upsert: true }
        );

        updates.push(updatedUser);
      }

      res.status(200).json({ message: 'Users updated successfully!', updates });
    } else {
      res.status(404).json({ message: 'No data found in the sheet.' });
    }
  } catch (error) {
    console.error('Error updating users in the database:', error);
    res.status(500).json({ message: 'Failed to update users in the database.', error });
  }
}

module.exports = { updateAllUserToDB };
