const mongoose = require('mongoose');
const MealScheme = require('./mongo.meal');


async function createMeal(meal) {
    try {
        return await MealScheme.create(meal);
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
    const updatedMeal = await MealScheme.updateOne(
        { id: new ObjectId(id) }, {
        text: text,
        calorie: calorie,
    })
    return updatedMeal;
}

async function getAllMeals(skip, limit, userId) {
    let now = new Date();
    let startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const launcheList = await MealScheme.find({ createdDate: { $gte: startOfToday }, user: userId }, {
        '__v': 0
    })
        .sort({ createdDate: 1 })
        .skip(skip)
        .limit(limit);

    return launcheList;
}


module.exports = {
    createMeal,
    deleteMeal,
    ifMealExist,
    updateMeal,
    getAllMeals
}
