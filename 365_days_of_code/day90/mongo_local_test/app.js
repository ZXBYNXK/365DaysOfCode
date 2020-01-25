require('dotenv/config')

const express = require('express'),
mongoose = require('mongoose'),
cors = require('cors'),
port = process.env.Port || 3000,
//Routes are imported below.
homeRoute = require('./routes/home-route'),
postsRoute = require('./routes/posts-route'),
app = express();



app.use(cors())

app.use(express.json())

app.use('/home', homeRoute)

app.use('/posts', postsRoute)

app.get('/', (req, res) => {


    res.status(200).json({
        message: "Root route connected sucessfully"
    })


})


app.listen(port, () => {
    console.log(`Listening on ${port}`)
})


mongoose.connect(
    process.env.DB_URI,
    {useNewUrlParser: true, useUnifiedTopology: true},
    () => {
        console.log('Connected to database')
    }
    )







