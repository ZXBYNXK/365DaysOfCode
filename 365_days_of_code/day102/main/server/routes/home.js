const express = require('express'),
    router = express.Router();


router.get('/', (req, res) => {
    console.log('On root');
    res.send('On root.');
})

module.exports = router;