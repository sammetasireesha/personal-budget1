//budget api

const express = require('express');
const cors = require('cors');
const app = express();
<<<<<<< HEAD
const port = 3000;
const mongoose = require('mongoose');
const router = express.Router();
const budgetModel = require('./models/budgetSchema');
const bodyParser = require('body-parser');
=======
const port = 3500;
>>>>>>> 2d46dcdfd5880de1f9aae71d9c1da166a2817bff

// Set up middleware to parse JSON data
app.use(bodyParser.json());
app.use(cors());

app.use('/pbudget', express.static('public'));

let url = 'mongodb://127.0.0.1:27017/sireesha_mongodb';

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to database")
    budgetModel.find({})
      .then((data) => {
        console.log(data)
      })
      .catch((connectionError) => {
        console.log(connectionError)
      })
  })
  .catch((connectionError) => {
    console.log(connectionError)
  })

// Define your endpoints

// Endpoint to fetch data from the database
app.get('/budget01', (req, res) => {
  budgetModel.find({})
  .then((data)=> {
    res.json(data)
  })
 /* budgetModel.find({}, (err, items) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(items);
    }
  });*/
});

// Endpoint to add new data to the database
app.post('/budget01', (req, res) => {
  const newItem = new budgetModel(req.body);
  newItem.save()
  .then((err)=> {
    console.log(err)
    res.status(200).send('item addedd successfully')

  })

  /*newItem.save((err) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(201).send('Item added to the database');
    }
<<<<<<< HEAD
  });*/
});
=======
  });
   
  
  app.listen(port, () =>{
      console.log('API served at http://localhost:3500');
  });
  

>>>>>>> 2d46dcdfd5880de1f9aae71d9c1da166a2817bff



app.listen(port, () => {
  console.log(' app serving at http://localhost:'+port);
});