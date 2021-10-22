const mongoose = require('mongoose');
const MealSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    calorie: {
        type: Number,
        required: true
    },
    target: {
        ref: 'User',
        required: true,
        type: mongoose.ObjectId,
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});
const Meal = mongoose.model('Meal', MealSchema);

module.exports = Meal;