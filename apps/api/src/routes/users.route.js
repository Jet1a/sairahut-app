const {
  getUserById,
  getAllUsers,
  addUser,
  updateUser,
  deleteUser,
} = require('../controller/users.db.controller');

const { guard } = require('../middlewares/authguard.middleware');

const { updateAllUserToDB, } = require('../controller/users.gsheets.controller');

const userRouter = require('express').Router();

userRouter.get('/id', getUserById);

userRouter.get('/getAllUser', guard, getAllUsers);
userRouter.post('/addUser', guard, addUser);
userRouter.put('/updateUser', updateUser);
userRouter.delete('/deleteUser', deleteUser);
userRouter.post('/updateUserToDB', guard, updateAllUserToDB);

module.exports = userRouter;
