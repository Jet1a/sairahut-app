const {
  getUserById,
} = require('../controller/users.db.controller');

const userRouter = require('express').Router();

userRouter.get('/id', getUserById);

module.exports = userRouter;
