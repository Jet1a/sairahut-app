const {
  getAllUsers,
  addUser,
  getUserById,
} = require('../controller/users.db.controller');

const { guard } = require('../middlewares/authguard.middleware');

const { addAllUserToDB, } = require('../controller/users.gsheets.controller');

const userRouter = require('express').Router();

userRouter.get('/id', getUserById);

userRouter.get('/getAllUser', guard, getAllUsers);
userRouter.post('/addUser', guard, addUser);
userRouter.post('/addUserTodb', guard, addAllUserToDB);

module.exports = userRouter;
