//Darius Rain
//Day 61

const express = require('express'),
app = express(),
port = 5000;

let route_1_visits = 0;

app.get('/', (req, res) => {
    
    res.send('Welecome to the root route')
})

//Now create middleware with the USE method
app.use('/home', () => {
    console.log(`You visted route1 ${++route_1_visits} time(s)`)

    
})

app.get('/home', (req, res) => {
   
    res.sendFile('./html_docs/index.html', {root: __dirname})

})


app.listen(port, () => {
    console.log(`Listening on ${port}`)
});