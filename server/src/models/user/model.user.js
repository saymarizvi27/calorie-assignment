const mongoose = require('mongoose');
const UserSchema = require('./mongo.user');

async function createUser(userDetails) {
    try {
        await UserSchema.create(userDetails);
    }
    catch (err) {
        console.error(`Could not create user account ${err}`)
    }
}

async function ifUserExists(query) {
    console.log(query, "query");
    return await UserSchema.findOne(query);
}
async function ifUserExistsById(id) {
    var ObjectId = require('mongoose').Types.ObjectId;
    return await UserSchema.findOne({ id: new ObjectId(id) });
}


module.exports = {
    createUser,
    ifUserExists,
    ifUserExistsById
}