const jwt = require('jsonwebtoken');

function generateToken(id) {
    const token = jwt.sign({ _id: id }, 'secretkey', {
        expiresIn: '1h', // expires in 24 hours
    });
    return 'Bearer '+ token;
}

function getDataFromToken(request, response) {
    try {
        const usertoken = request.header('authorization');
        const decoded = jwt.verify(usertoken, 'secretkey');
        return decoded;
    } catch (e) {
        response.statusCode = 301;
 
    }
}

module.exports = {
    generateToken,
    getDataFromToken
}