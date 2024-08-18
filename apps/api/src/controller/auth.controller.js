
const { PASSWORD: ADMIN_PASSWORD, JWT_SECRET } = require('../config/index')
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

module.exports = {
    login
}