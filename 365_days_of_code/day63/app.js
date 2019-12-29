//Darius Rain 
//Day 63: Build a basic food order API

//Import body-parser and express.js


const express = require('express'),
body_parser = require('body-parser'),
//Create a variable for main filename reffering to  "main": "app.js", from the package.json file.
app = express(),

orders_route = require('./api/router/orders.js'),

//This chooses port value from the process object or port 5000
PORT = process.env.PORT || 5000;




// Add middleware to app.
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: false }));
app.get('/', (req, res) => {
    res.send('Home')
})
app.use('/orders', orders_route)
// Execute the .listen(port, callbackFunction) express method.
app.listen(PORT, () => {
    console.log(`running at port ${PORT}`);
  });