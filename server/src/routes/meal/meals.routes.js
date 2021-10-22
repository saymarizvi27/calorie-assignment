const express = require('express');
const { httpCreateMeal, httpDeleteMeal , httpUpdateMeal} = require('../../controller/meals.controller');
const { verifyAuth } = require('../../utility/auth');
const mealsRouter = express.Router();

mealsRouter.post('/', verifyAuth, httpCreateMeal);
mealsRouter.delete('/:id', verifyAuth, httpDeleteMeal);

// mealsRouter.get('/', verifyAuth , httpCreateMeal);
mealsRouter.put('/:id', verifyAuth, httpUpdateMeal);


module.exports = mealsRouter;
