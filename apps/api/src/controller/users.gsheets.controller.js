const User = require('../models/user.model');
const accessSpreadsheet = require('../utils/sheets');

async function addAllUserToDB(req, res) {
  try {
    const sheetData = await accessSpreadsheet('สายรหัสน้องIT#30', 'A2', 'J115');
    const rows = sheetData.data.values;
    const schemaKeys = Object.keys(User.schema.obj);

    if (rows.length) {
      const includeIndex = [0, 3, 4, 5, 6, 7, 8, 9]; 
      const users = [];

      rows.forEach((row, rowIndex) => {
        const mappedData = includeIndex.map((index) => row[index]);
        let user = {};
        schemaKeys.forEach((key, keyIndex) => {
          user[key] = mappedData[keyIndex] || null;
        })
        users.push(user)
      })

      await User.insertMany(users);

      res.status(200).json({ message: 'Users added successfully!' });
    } else {
      res.status(404).json({ message: 'No data found in the sheet.' });
    }
  } catch (error) {
    console.error('Error adding users to database:', error);
    res
      .status(500)
      .json({ message: 'Failed to add users to database.', error });
  }
}

module.exports = { addAllUserToDB };
