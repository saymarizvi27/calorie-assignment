const jwt = require('jsonwebtoken');
const { checkUser } = require('./redis');
require('dotenv').config();

function generateToken(id) {
    const token = jwt.sign({ _id: id }, process.env.SECRET, {
        expiresIn: '1h', // expires in 1 hours
    });
    return 'Bearer ' + token;
}

async function verifyAuth(req, res, next) {
    try {
        const usertoken = req.header('authorization').replace(/^Bearer\s+/, "");
        const decoded = jwt.verify(usertoken, process.env.SECRET);
        const user = await checkUser(req.header('authorization'));
        if (!user){
            return res.status(401).json({
                error: 'UnAuthorized Access',
            });
        }
        req.user = user;
        next();
    } catch (e) {
        return res.status(401).json({
            error: 'UnAuthorized Access',
        });

    }
}

module.exports = {
    generateToken,
    verifyAuth
}