const mongoose = require('mongoose');
const MealScheme = require('./mongo.user');


async function createMeal(meal) {
    try {
        await MealScheme.create(meal);
    }
    catch (err) {
        console.error(`Could not create meal ${err}`)
    }
}


module.exports = {
    createMeal
}