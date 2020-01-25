const express = require('express'),
router = express.Router(),
Post = require('../models/Post');



router.get('/', async (req, res) => {
try{
    const allPosts = await Post.find();

    res.status(200).json(allPosts)
}
catch (err) {
    res.status(500).json({
        message: err
    })
}
});

router.post('/', async (req, res) => {
    const post = new Post({
        name: req.body.name,
        content: req.body.content

    })
    //console.log(post)
    try {
        //console.log(post)
        const savedPost = await post.save();
        console.log(savedPost)
        res.json(savedPost)
    }
    catch (err) {
        console.log(err)
        res.status(400).json(
            {message: err}
        )
    }
})



module.exports = router;