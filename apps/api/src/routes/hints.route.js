const hintRouter = require('express').Router();
const {
  getHintsByCode,
} = require('../controller/hints.db.controller');

hintRouter.get('/getHint', getHintsByCode);

module.exports = hintRouter;
