const mongoose = require('mongoose');
const { MONGODB_URL} = require("../config/index")

const testConnectionDB = async () => {
  console.log('TEST MONGODB CONNECTION...');
  console.log(`MongoDB URL: ${MONGODB_URLL}`);

  try {
    await mongoose.connect(MONGODB_URL).then((conn) => {
      console.log(`MongoDB Connection: ✅`);
      return conn.connection;
    });
  } catch (err) {
    console.log(`MongoDB Connection: ❌`);
  }
};

const connectDB = async () => {
  try {
    await mongoose
      .connect(MONGODB_URL)
      .then((conn) => {
        console.log(`MongoDB Connection: ✅`);
        return conn.connection;
      })
      .catch((err) => {
        console.error(`MongoDB Connection Error: ${err.message}`);
      });
  } catch (err) {
    console.log(`MongoDB Connection: ❌`);
  }
};

const disconnectDB = async () => {
  try {
    await mongoose.connection.close();
    console.log(`MongoDB Connection: Disconnected`);
  } catch (err) {
    console.log(`MongoDB Connection: Failed to disconnect`);
  }
};

module.exports = {
  testConnectionDB,
  connectDB,
  disconnectDB,
};
