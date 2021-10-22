const { createMeal, deleteMeal, ifMealExist , editMeal } = require('../models/meal/model.meal');

async function httpCreateMeal(req, res) {
    try {
        const userId = req.body.userId;
        const mealDetails = req.body;
        if (!mealDetails.description || !mealDetails.calorie || !mealDetails.name) {
            return res.status(400).json({
                error: 'Missing required property',
            });
        }
        mealDetails.user = userId;
        await createMeal(mealDetails);
        return res.status(201).json
            ({
                data: mealDetails,
                code: 201,
                message: 'Meal created succesfully',
                error: false
            });
    }
    catch (e) {
        console.log(e, "ERROR")
        return res.status(500).json({
            error: 'Internal server error ',
        });
    }
}

async function httpDeleteMeal(req, res) {
    try {
        const userId = req.body.userId;
        const id = Number(req.params.id);

        const meal = await ifMealExist(id);
        if (!meal) {
            return res.status(404).json({
                error: 'Meal not found',
            });
        }
        if (meal.user !== userId) {
            return res.status(404).json({
                error: 'Access Denied',
            });
        }

        await deleteMeal(id);
    }
    catch (e) {
        console.log(e, "ERROR")
        return res.status(500).json({
            error: 'Internal server error ',
        });
    }
}

module.exports = {
    httpCreateMeal,
    httpDeleteMeal,
    httpEditMeal
}