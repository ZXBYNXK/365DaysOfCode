const express = require('express'),
postRoute = express.Router(),
path = require('path'),
Post = require('../models/post_model');

let times = 0


postRoute.get('/', (req, res) => {
 res.send(`Aquired post route ${++times} time(s)` )
 //express.static(__dirname, '/web_docs')

 //res.sendFile(path.join(__dirname, '../web_docs/index.html'))


})

postRoute.post('/add-post', (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })
    post.save()
    .then(data => {
        res.json(data)
    })
    .catch (err => {
        res.json({message: err})
    })
 })







module.exports = postRoute