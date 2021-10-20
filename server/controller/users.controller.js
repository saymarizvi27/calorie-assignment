// const { getAllPlanets } = require('../../models/planets.model');

async function httpUserSignUp(req,res){
     return res.status(200).json("hey working");
}

module.exports = {
    httpUserSignUp,
}