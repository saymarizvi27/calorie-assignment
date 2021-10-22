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
    user: {
        ref: 'User',
        required: true,
        type: mongoose.ObjectId,
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
});
const Meal = mongoose.model('Meal', MealSchema);

module.exports = Meal;