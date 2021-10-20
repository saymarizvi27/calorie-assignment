const bcrypt = require('bcrypt');
var generator = require('generate-password');

function createHash(password) {
    return bcrypt.hashSync(password, 10);
}

function compareHash(password, hash) {
    let tempHash = this.createHash(password);
    return bcrypt.compareSync(password, tempHash)
}

module.exports = {
    createHash,
    compareHash
}