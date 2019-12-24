//Darius Rain
//Day 58

//The code below imports the express.js file after you of course install it with npm to your packages.json unless you installed it globally.
//But I am only using it locally (The preffered method in most cases from what I learned) 
const express = require('express'),
app = express(),
port = 5000;

let route_1_visits = 0;

app.get('/', (req, res) => {
    res.send('Welecome to the root route')
})

// Now create middleware with the USE method
app.use('/route1', () => {
    console.log(`You visted route1 ${++route_1_visits} time(s)`)
})

app.get('/route1', (req, res) => {
    res.send('Route # 1')
})


app.listen(port, () => {
    console.log(`Listening on ${port}`)
});