const {
    getAllUsers,
    addUser,
    updateUser,
    deleteUser,
  } = require('../controller/admin.db.controller');
  
  const { guard } = require('../middlewares/authGuard.middleware');
  const { updateAllUserToDB } = require('../../controller/users.gsheets.controller');
  const { login } = require('../controller/auth.controller');
  
  const adminRouter = require('express').Router();
  
  adminRouter.post('/login', login);
  adminRouter.get('/getAllUser', guard, getAllUsers);
  adminRouter.post('/addUser', guard, addUser);
  adminRouter.put('/updateUser', guard, updateUser);
  adminRouter.delete('/deleteUser', guard, deleteUser);
  adminRouter.put('/updateUserToDB', guard, updateAllUserToDB);
  
  module.exports = adminRouter;
  