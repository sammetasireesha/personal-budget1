const mongoose = require("mongoose");
const mongoDBClient = require('mongodb').MongoClient

const nameModel = require("./models/names_schema")

let url = 'mongodb://localhost:27017/sireesha_mongodb';

    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("connected");
            nameModel.find({})
                .then((data) => {
                    console.log(data);
                    mongoose.connection.close();

                })
                .catch((connectionError) => {
                    console.log(connectionError)
                })
        })
        .catch((connectionError) => {
            console.log(connectionError);
        })












//1- connect to database
//2- perform the desired operation
//3- close database connection