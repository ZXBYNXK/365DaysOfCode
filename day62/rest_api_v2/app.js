const express = require('express'),
app = express(),
productRoutes = require('./api/routes/products');

app.get('/', productRoutes)
app.use((req,res,next) => {
    res.status(200).json({
        message:'Server working'
    })
});



module.exports = app;