const mongoose = require('mongoose');
require('dotenv').config();

const mongoURI = process.env.URI;

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;