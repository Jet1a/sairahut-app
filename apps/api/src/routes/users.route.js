const {
  getUserById,
} = require('../controller/users.db.controller');

const userRouter = require('express').Router();

userRouter.get('/getUser', getUserById);

module.exports = userRouter;