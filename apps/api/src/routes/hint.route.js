const hintRouter = require('express').Router();
const {
  getHintsByCode,
} = require('../controller/hints.db.controller');

hintRouter.get('/gethint', getHintsByCode);

module.exports = hintRouter;
