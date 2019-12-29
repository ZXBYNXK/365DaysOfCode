//Name: Darius Rain
//Date: 11-27-19
//Day: 32
//Mission: Used the http module, and used that module to build a simple server with a loopback IP address:'127.0.0.1'.

const http = require('http'),
    fs = require('fs'),
    onRequest = function (request, response) {
        response.writeHead(200, { 'Content-Type': 'text/html' })
        console.log('Client request:' + request.url)
        fs.readFile('./day32index.html', null, function (error, data) {

            if (error) {
                console.log('Error 404')
                response.writeHead(404);
                response.write('File not found!')
            } else {
                console.log('Request granted')
                response.write(data)
            }
            response.end();
        })

    }
http.createServer(onRequest).listen(8000)
