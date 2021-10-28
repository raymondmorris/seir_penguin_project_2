//////////////////////////
// Import Dependencies
//////////////////////////
const mongoose = require("./connection.js")

//////////////////////////
// Drinks model
/////////////////////////
const {Schema, model} = mongoose

const drinkSchema = new Schema ({
    name: {type: String, required: true},
    image: String,
    measurements: {type: {measurement1: String, measurement2: String, measurement3: String, measurement4: String, measurement5: String, measurement6: String, measurement7: String, measurement8: String, measurement9: String, measurement10: String,}, default: null},
    ingredients: {type: {ingredient1: String, ingredient2: String, ingredient3: String, ingredient4: String, ingredient5: String, ingredient6: String, ingredient7: String, ingredient8: String, ingredient9: String, ingredient10: String,}, default: null},
    instructions: {type: String, required: true},
    glass: String,
})

const Drink = model("Drink", drinkSchema)


///////////////////
// Export
//////////////////
module.exports = Drink