const {
  getAllUsers,
  addUser,
  getUserById,
} = require('../controller/users.db.controller');

const { auth } = reqiure('../middlewares/authGuard.middleware');

const { addAllUserToDB, } = require('../controller/users.gsheets.controller');

const userRouter = require('express').Router();

userRouter.get('/', auth, getAllUsers);
userRouter.get('/id', auth, getUserById);
userRouter.post('/', auth, addUser);
userRouter.post('/addUserTodb', auth, addAllUserToDB);

module.exports = userRouter;
