const { createUser, ifUserExists , ifUserExistsById } = require('../models/user/model.user');

async function httpCreateMeal(req, res) {
    try {
        const userId = req.body.userId;
        const mealDetails = req.body;
        if (!mealDetails.text || !mealDetails.calorie) {
            return res.status(400).json({
                error: 'Missing required property',
            });
        }
       
        await createUser(mealDetails);
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
