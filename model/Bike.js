const mongoose = require("mongoose");

const bikeSchema = new mongoose.Schema({
    name : String,
    company : String,
    startingPrice : Number,
    fuelType : String,
    category : String,
    mileage : Number,
    fuelCapacity : Number,
    kerbWeight : Number,
    groundClearance : Number,
    cc : Number,
    "ABS" : String
}) 

module.exports = mongoose.model("Bike", bikeSchema);