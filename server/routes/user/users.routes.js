const express = require('express');
const { httpUserSignUp, httpUserLogin } = require('../../controller/users.controller');
const { verifyAuth } = require('../../utility/auth');
const usersRouter = express.Router();

usersRouter.post('/signup', httpUserSignUp);
usersRouter.post('/login', httpUserLogin);
usersRouter.get('/', verifyAuth, httpUserLogin);

module.exports = usersRouter;