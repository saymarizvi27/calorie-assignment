const express = require('express');
const { httpCreateMeal } = require('../../controller/meals.controller');
const { verifyAuth } = require('../../utility/auth');
const usersRouter = express.Router();

usersRouter.post('/', verifyAuth , httpCreateMeal);

