# Day 78 - Post test
Darius Rain
   
   
In order for this to work if you cloned this repo, in the terminal first execute 'npm install' then you want to run if you have VScode: 'code .env' or open the .env file in your editor,
and where you see 'ADD USERNAME HERE' & 'ADD PASSWORD HERE' you want to put in from your mongodb admin user.





# CODE FOR THE POST:



<mark>
router.post('/', async  (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })
   
    try {
        const savedPost = await post.save()
        res.json(savedPost) 
        console.log('Sending post response')
    } 
    catch (err) { 
        res.json({
            message: err
        })
    }
})
</mark>
# CODE FOR THE MONGOOSE MODEL:
<mark>
const mongoose = require('mongoose'),
Post = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model('Posts', Post)
</mark>











Find additional content in the comments of my javascript files.
