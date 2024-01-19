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
    seatHeight : Number,
    cc : Number,
    "brakes" : String,
    "imageURL" : String,
    "website" : String
}) 

module.exports = mongoose.model("Bike", bikeSchema);