const express = require('express');
const usersRouter = require('./user/users.routes');

const api =express.Router();

api.use('/user', usersRouter);

module.exports = api;