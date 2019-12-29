//Darius Rain
//Day 57
//Setup a basic node js RESTful api (In progress!) ON this day i will just be configuring ROUTES with EXPRESS METHODS, and using NODEMON to do so.
//Also set the dependencies('npm install package-name --save' ---> adds the packages locally) so when the node application is installed 
//all dependencies are automatically configured for the end user. 

//                                                      <SOURCES WHERE I LEARNED FROM>

//Routing refers to how an application’s endpoints (URIs) respond to client requests. For an introduction to routing, see Basic routing. 
//Source: EXPRESS WEBSITE -> https://expressjs.com/en/guide/routing.html

// URI - Uniform Resource Identifier
//A Uniform Resource Identifier is a string of characters that unambiguously identifies a particular resource. To guarantee uniformity, <-
//-> all URIs follow a predefined set of syntax rules, but also maintain extensibility through a separately defined hierarchical naming scheme.
//Source: https://en.wikipedia.org/wiki/Uniform_Resource_Identifier

/*
URI ~ URI is an identifier of a specific resource. Like a page, or book, or a document.
URL ~ A URL is an identifier that also tells you how to access it, such as HTTPs, FTP, etc.—like https://www.google.com.
--If the protocol (https, ftp, etc.) is either present or implied for a domain, you should call it a URL—even though it’s also a URI.
Source : https://danielmiessler.com/study/difference-between-uri-url/
*/

//Run Nodemon by 'npx nodemon <your node.js file>'

//First you want to .get (HTTP METHOD: 'GET') your root route (ROOT: '/') after this you will be able to now add your higherarchy of routes.
//EX: /any_route_name_i_want    
//The example above the backslash is the root route from which all routes derive from and the 'any_route_name_i_want' is the new route
//NOTE: In order to do the above~>(Above: create a new route), use the same syntax you did:  
//'app.get('/', (req, res) => {...})'
// But instead use this 'app.get('/any_route_name_i_want', (req, res) => {...})'
const express = require('express'),
app = express(),
port = 5000;

let route_1_visits = 0;

app.get('/', (req, res) => {
    res.send('Welecome to the root route')
})

//Now create middleware with the USE method
app.use('/route1', () => {
    console.log(`You visted route1 ${++route_1_visits} time(s)`)
    
})

app.get('/route1', (req, res) => {
    res.sendFile('./html_docs/index.html', {root: __dirname})
    

})


app.listen(port, () => {
    console.log(`Listening on ${port}`)
});

