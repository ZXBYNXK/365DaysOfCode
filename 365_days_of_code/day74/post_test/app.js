//Darius Rain
//Date: 1/8/20
//Day: 74
/*
Find the code for the post request for this path routes_dynamic/posts.js
*/

//Import all dependencies from package.json here using the following syntax
// ~> ' const <variableName> = require('<dependency>') '
// ~~> Use the above syntax to import any depenency you wish too use for your node application.

 const express = require('express'),
 mongoose = require('mongoose'),
 bodyParser = require('body-parser'),
 port = process.env.PORT || 3000,
 rootRoute = express(),
 //Added external routes below here
 postsRoute = require('./routes_dynamic/posts');

 //Added external routes above here

 require('dotenv/config');





 //Use body parser as middleware. anthing with the following syntax is middleware
 //~> <routevariablename>.use(callback function)
 rootRoute.use(bodyParser.json())
rootRoute.use('/posts', postsRoute)
 rootRoute.get('/', (req, res) => {
     res.send('Connected to home route')
 })


 mongoose.connect(
     process.env.databaseSource,
     {useNewUrlParser: true},
     () => {
         console.log('Databas connected')
     }
     )




 rootRoute.listen(port, () => {
     console.log(`Listening on ${port}`)
 })

