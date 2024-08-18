require('dotenv').config();

const MONGODB_URL = process.env.MONGODB_URL;
const PORT = process.env.PORT;

const SPREADSHEET_ID = process.env.SPREADSHEET_ID;
const KEYFILE_NAME = process.env.KEYFILE_NAME;

const PASSWORD = process.env.PASSWORD;
const JWT_SECRET = process.env.JWT_SECRET;

module.exports = {
    MONGODB_URL,
    PORT,
    SPREADSHEET_ID,
    KEYFILE_NAME,
    PASSWORD,
    JWT_SECRET
}