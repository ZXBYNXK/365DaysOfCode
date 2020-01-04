const express = require('express'),
postRoute = express.Router(),
path = require('path');

let times = 0


postRoute.get('/posts', (req, res) => {
 console.log(`Aquired post route ${++times} time(s)` )
 //express.static(__dirname, '/web_docs')

 res.sendFile(path.join(__dirname, '../web_docs/index.html'))

})

module.exports = postRoute