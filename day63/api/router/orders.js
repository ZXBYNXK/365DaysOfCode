module.exports = (function() {
    'use strict';
    //Create an idnividual router for the name category 'most likely the javascript file name/route description', 
    var orders_router = require('express').Router();

    //create a root route for this one as well,
    orders_router.get('/', function (req, res) {
        res.send('Welcome to order main page');
    });

    //Then add on to the root route as usual.
    orders_router.get('/new_order', function (req, res) {
        res.send('Make a new order?');
    });

    return orders_router;
})();