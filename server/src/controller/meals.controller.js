const { createMeal, deleteMeal, ifMealExist, updateMeal } = require('../models/meal/model.meal');

async function httpCreateMeal(req, res) {
    try {
        const userId = req.body.userId;
        const mealDetails = req.body;
        if (!mealDetails.text || !mealDetails.calorie) {
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

        const isDeleted = await deleteMeal(id);
        if (isDeleted) {
            return res.status(201).json
                ({
                    data: '',
                    code: 200,
                    message: 'Meal deleted succesfully',
                    error: false
                });
        }
        else {
            return res.status(404).json({
                error: 'Could not delete user ',
            });
        }
    }
    catch (e) {
        console.log(e, "ERROR")
        return res.status(500).json({
            error: 'Internal server error ',
        });
    }
}

async function httpUpdateMeal(req, res) {
    try {
        const userId = req.body.userId;
        const id = Number(req.params.id);
        const mealDetails = req.body;
        if (!mealDetails.text || !mealDetails.calorie) {
            return res.status(400).json({
                error: 'Missing required property',
            });
        }
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

        const updatedMeal = await updateMeal(id, mealDetails.text, mealDetails.calorie);
        if (updatedMeal) {
            return res.status(201).json
                ({
                    data: updatedMeal,
                    code: 200,
                    message: 'Meal updated succesfully',
                    error: false
                });
        }
        else {
            return res.status(404).json({
                error: 'Could on update user ',
            });
        }
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
    httpUpdateMeal,
    // httpGetMeal
}