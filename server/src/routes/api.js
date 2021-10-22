const express = require('express');
const usersRouter = require('./user/users.routes');
const mealsRouter = require('./meal/meals.routes');

const api =express.Router();

api.use('/user', usersRouter);
api.use('/meal', mealsRouter);


module.exports = api;