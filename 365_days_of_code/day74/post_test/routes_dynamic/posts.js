//Darius Rain
//Date: 1/8/20
//Day: 74
/*
Below you will find the post request code
*/


const express = require('express'),
router = express.Router(),
Post = require('../models/Post')


router.get('/', (req, res) => {
    
    res.json({
        "message": "On post root route"
    })
    
    
    



})


router.post('/new-post', (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description 
    })
    post.save()
    try {
        res.json(post)
    }
    catch (err) {
        res.json({message: err})
    }
})

router.get('/all-posts', (req, res) => {
    const allPosts = Post.find()
//having problems with this maybe you can help! 
//ehh ill figure it out. 

   
})



module.exports = router