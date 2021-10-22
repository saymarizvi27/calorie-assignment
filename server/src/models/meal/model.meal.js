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

async function deleteMeal(id) {
    try {
        var ObjectId = require('mongoose').Types.ObjectId;
        return await MealScheme.findOneAndDelete({ id: new ObjectId(id) });
    }
    catch (err) {
        console.error(`Could not delete meal ${err}`)
    }
}

async function ifMealExist(id) {
    var ObjectId = require('mongoose').Types.ObjectId;
    return await MealScheme.findOne({ id: new ObjectId(id) });
}

module.exports = {
    createMeal,
    deleteMeal,
    ifMealExist,
    editMeal
}
