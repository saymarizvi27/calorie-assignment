const express = require('express');
const { httpUserSignUp , httpUserLogin } = require('../../controller/users.controller');

const usersRouter = express.Router();

usersRouter.post('/signup', httpUserSignUp);
usersRouter.post('/login', httpUserLogin);

module.exports = usersRouter;