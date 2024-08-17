const {
  getAllUsers,
  addUser,
  getUserById,
} = require('../controller/users.db.controller');

const { addAllUserToDB, } = require('../controller/users.gsheets.controller');

const userRouter = require('express').Router();

userRouter.get('/', getAllUsers);
userRouter.get('/id', getUserById);
userRouter.post('/', addUser);
userRouter.post('/addUserTodb', addAllUserToDB);

module.exports = userRouter;
