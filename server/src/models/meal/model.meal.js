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


async function updateMeal(id, text, calorie) {
    var ObjectId = require('mongoose').Types.ObjectId;
    const updatedMeal = await launches.updateOne(
        { id: new ObjectId(id) }, {
            text: text,
            calorie: calorie,
        })
    return updatedMeal;
}

module.exports = {
    createMeal,
    deleteMeal,
    ifMealExist,
    updateMeal
}
