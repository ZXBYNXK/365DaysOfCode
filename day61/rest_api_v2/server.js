//server.js



const http = require('http'),
app = require('./app'),
port = process.env.PORT || 5000,
server = http.createServer(app);


server.listen(port)
console.log(`Listening on port ${port}`)