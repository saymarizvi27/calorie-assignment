const { createMeal } = require('../models/user/model.meal');

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


module.exports = {
    httpCreateMeal
}