const UserSchema = require('./mongo.user');

async function createUser(userDetails) {
    try {
        await UserSchema.create(userDetails);
    }
    catch (err) {
        console.error(`Could not create user account ${err}`)
    }
}

async function ifUserExists(email) {
    return await UserSchema.findOne({ email: email });
}

module.exports = {
    createUser,
    ifUserExists
}