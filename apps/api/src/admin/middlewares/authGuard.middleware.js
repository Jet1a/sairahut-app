const { JWT_SECRET } = require('../../config/index');
const jwt = require("jsonwebtoken");

function guard(req, res, next) {
    let token = req.header('Authorization');
  
    if (!token) {
      return res.status(401).json({ error: 'Access Denied. No token provided.' });
    }

    token = token.replace("Bearer ", "");
  
    jwt.verify(token, JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json({ error: 'Invalid Token' });
      }
  
      req.user = user;
      next();
    });
  }

module.exports = {
  guard,
}