const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Bike = require('./model/Bike');

const app= express();
app.use(express.json());

app.use(cors());

app.get("/bikes", async (req, res) => {
    try {
        const { startingPrice, mileage, groundClearance, category } = req.query;
        // A D D   other query params and their variables
        const query = {};

        if (startingPrice) query.startingPrice = { $gte: parseInt(price) };
        if (mileage) query.mileage = { $gte: parseInt(mileage) };
        if (groundClearance) query.groundClearance = { $gte: parseInt(groundClearance) };
        if (category) query.category = { $eq: category };

        // console.log(query);

        const bikes = await Bike.find(query);
        res.json(bikes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


//  P O S T   R E Q U E S T 
app.post("/bikes/create", async (req,res) => {
    console.log(req.body);
    const newBike = new Bike(req.body);
    try {
        const savedBike = await newBike.save();
        res.status(200).json(savedBike);
    } catch (error) {
        res.status(500).json(error);
    }

});

mongoose.connect(
    "mongodb://shamlinlearning:zJuHgQMxwcKWlB8B@ac-08dhk2y-shard-00-00.n6hxill.mongodb.net:27017,ac-08dhk2y-shard-00-01.n6hxill.mongodb.net:27017,ac-08dhk2y-shard-00-02.n6hxill.mongodb.net:27017/bikeAPI?ssl=true&replicaSet=atlas-pww4uv-shard-0&authSource=admin&retryWrites=true&w=majority"
    // u s e   this type of connection string (NodeJS version 2.2.12)in mongoDB Atlas
    // "mongodb://localhost:27017/bikeAPI",
    ).then(console.log("Connected to MongoDB !")
);

app.listen(8080, ()=>{
    console.log("Server started at port 8080");
});