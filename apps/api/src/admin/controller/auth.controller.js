const { PASSWORD: ADMIN_PASSWORD, JWT_SECRET } = require('../../config/index')
const jwt = require('jsonwebtoken')

const login = async (req, res) => {
    const password = req.body.password;
    
    if(!password) {
        return res.status(403).json({ error: 'No password provided' });
    }

    if(ADMIN_PASSWORD !== password) {
        return res.status(401).json({ error: 'Wrong password'})
    }

    const accessToken = jwt.sign({ userId: 1 }, JWT_SECRET, { expiresIn: '30m' });

    return res.status(201).json({ accessToken })
}

function verifyToken(req, res) {
    const { token } = req.body;
  
    if (!token) {
      return res.status(400).json({ valid: false, error: 'Token is required' });
    }
  
    jwt.verify(token, JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json({ valid: false, error: 'Invalid token' });
      }
  
      res.status(200).json({ valid: true, user });
    });
  }

module.exports = {
    login,
    verifyToken,
}