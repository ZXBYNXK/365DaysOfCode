//Darius Rain
//Day 69: Connect to mongoose database
//File: app.js



//Require all dependencies from the package.json file, the dependencies will be physically located in the 'node_modules' directory
const express = require('express');

//This will hold the above method value which is an object.
app = express(),


port = 3000,


mongoose = require('mongoose'),


bodyParser = require('body-parser'),


postRoutes = require('./routes/posts'),


path = require('path');

require('dotenv/config');


//Use 'body-parser' as middleware in order to parse the day from the request object to JSON
// formant you need to INCLUDE THIS AT THE TOP of your file you wish to recieve this data with HTTP methods(GET, POST, PUT, DELETE).

app.use(bodyParser);

app.get('/', (req,res) => {
    res.send('Welecome to the root route my very first HTTP server !!! ')
})

app.use('/', postRoutes);




mongoose.connect(
    process.env.db_connect,
    {useNewUrlParser: true},
    () => {
        console.log('Database conntected successfully!')
    }
)


// Set app equal to the express
app.listen(port, () => {
    console.log(`Listening on ${port}`)
});
//Listens to port