const express = require('express');
const { httpCreateMeal, httpDeleteMeal , httpUpdateMeal, httpGetAllMeals,httpGetMeals} = require('../../controller/meals.controller');
const { verifyAuth } = require('../../utility/auth');
const mealsRouter = express.Router();

mealsRouter.post('/', verifyAuth, httpCreateMeal);
mealsRouter.delete('/:id', verifyAuth, httpDeleteMeal);
mealsRouter.get('/', verifyAuth , httpGetAllMeals);
mealsRouter.get('/:id', verifyAuth , httpGetMeals);
mealsRouter.put('/:id', verifyAuth, httpUpdateMeal);


module.exports = mealsRouter;
