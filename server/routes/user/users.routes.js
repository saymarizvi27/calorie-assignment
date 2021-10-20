const express = require('express');
const { httpUserSignUp } = require('../../controller/users.controller');

const usersRouter = express.Router();

usersRouter.post('/', httpUserSignUp);

module.exports = usersRouter;