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
    return await UserSchema.findOne(query);
}
async function ifUserExistsById(id) {
    const ObjectId = require('mongoose').Types.ObjectId;
    return await UserSchema.findOne({ _id: new ObjectId(id) }, {
        '_id': 0,
        '__v': 0,
        'password': 0
    });
}


module.exports = {
    createUser,
    ifUserExists,
    ifUserExistsById
}