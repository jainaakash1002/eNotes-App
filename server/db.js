const mongoose = require('mongoose');
require('dotenv').config();

const mongoURI = `mongodb://${process.env.USER}:${process.env.PASSWORD}@${process.env.HOST}:${process.env.PORT}/${process.env.DB}`;

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;