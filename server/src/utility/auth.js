const jwt = require('jsonwebtoken');
const { checkUser } = require('./redis');

function generateToken(id) {
    const token = jwt.sign({ _id: id }, 'secretkey', {
        expiresIn: '1h', // expires in 1 hours
    });
    return 'Bearer ' + token;
}

async function verifyAuth(req, res, next) {
    try {
        const usertoken = req.header('authorization').replace(/^Bearer\s+/, "");
        const decoded = jwt.verify(usertoken, 'secretkey');
        console.log(decoded);
        const user = await checkUser(req.header('authorization'));
        if (!user){
            return res.status(301).json({
                error: 'UnAuthorized Access',
            });
        }
    } catch (e) {
        console.log(e,"error")
        return res.status(301).json({
            error: 'UnAuthorized Access',
        });

    }
}

module.exports = {
    generateToken,
    verifyAuth
}