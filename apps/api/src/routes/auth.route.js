const { login } = require('../controller/auth.controller');
  
const authRouter = require('express').Router();
  
authRouter.post('/login', login);

module.exports = authRouter;
  