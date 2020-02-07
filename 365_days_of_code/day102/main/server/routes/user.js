const express = require('express'),
    router = express.Router(), 
    userModel = require('../models/user'),
    jwt = require('jsonwebtoken');
    
router.get('/', (req, res) => {
    
    console.log('On user route');
    res.send('On root.');

})

router.post('/signup', async (req, res) => {
console.log(req.body)

    const newUser = new userModel({
        "username": `${req.body.username}`,
        'password': `${req.body.password}`
    });

    try {
        const savedUser = await newUser.save()
        res.send(savedUser)
    }
    catch (err) {
        console.log(err)
        res.send(err)
    }

})


router.post('/login', async (req, res) => {
    console.log(0)
    // try {
    //     const loginRequest = await userModel.find({username: req.body.username, password: req.body.password});
    //     res.status(200).json(loginRequest)
    //     console.log(1)

    // }
    // catch (err){ 
    //          res.json({message: err})
    //          console.log(2)
    // }

await userModel.find({username: req.body.username, password: req.body.password})   
     .then(result => {
         if(result.length > 0){
        res.status(200).json(result)
         }else {
             res.status(401).json({message: 'Invalid username and or password'})
         }  
        return;
    }).catch(err => console.log(err))
  
})

router.get('/profile', (req, res) => {
    res.status(201).send('Logges') 
})


module.exports = router;