const express = require('express');
const app = express();
const port = 3000;

app.use('/Sireesha', express.static('public'));

const budget = {mybudget:[
    {title: 'Eat out' ,
budget: 30
},
{
    title: 'Rent' ,
budget: 400
},
{
    title: 'Groceries' ,
budget: 90
},
]}

app.get('/', (req, res) => {
    res.send('Hello World!');
});
const fs = require('fs');

fs.readFile('budget.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the JSON file:', err);
      return;
    }
  
    try {
      const jsonData = JSON.parse(data);
      console.log(jsonData);
      const bdata = jsonData;
      app.get('/budget01',(req, res) => {
          res.json(bdata);
      });
    } catch (error) {
      console.error('Error parsing JSON data:', error);
    }
  });
   
  
  app.listen(port, () =>{
      console.log('Example app listening at http://localhost:3000');
  });
  




