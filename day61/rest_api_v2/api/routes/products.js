const express = require('express'),
router = express.Router;


router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling HTTP GET request to /products'
    })
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling HTTP POST request to /products'
    })
})

router.get('/:productId', (req,res,next)=>{
    const id = req.params.productId;
    if(id === 'special'){
        res.status(200).json({
            message: 'You discovered special Id'
        })
    }else {
        res.status(200).json({
            message: `You requested id ${productId}`
        })
    }
})

module.exports = router;