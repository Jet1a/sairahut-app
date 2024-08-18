const {
  getAllUsers,
  addUser,
  getUserById,
} = require('../controller/users.db.controller');

const { guard } = require('../middlewares/authGuard.middleware');

const { updateAllUserToDB, } = require('../controller/users.gsheets.controller');

const userRouter = require('express').Router();

userRouter.get('/id', getUserById);

userRouter.get('/getAllUser', guard, getAllUsers);
userRouter.post('/addUser', guard, addUser);
userRouter.post('/updateUserToDB', guard, updateAllUserToDB);

module.exports = userRouter;
