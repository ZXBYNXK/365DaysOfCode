//Darius Rain
//Day 86 : Handling Post data.

const json_posts = require('./users_file.json');
JSON.parse(JSON.stringify(json_posts));
const set_userId = 10; 
const set_postId = 12;
//console.log(json_posts)

function findPostsByUserId(id){

    const findId = json_posts.filter((object) => {
       
        if(object.userId === id){
            return object
        }
    })
    
       return findId
}


function findByPostId(id){

    const findId = json_posts.filter((object) => {
       
        if(object.id === id){
            return object
        }
    })
    
       return findId



}


function postsInOrderByUserId(id){
    const postsSorted = []
    
 const findId = json_posts.filter((object) => {
       
        if(object.userId === id){
            
            postsSorted.push(object)
        }
    })
    
       return postsSorted.sort((a,b) => a >= b)



}


console.log(`All posts in order: (User ID# ~ ${set_userId}) `)
console.log(postsInOrderByUserId(set_userId))
console.log('\n')

console.log(`Find post by ID: (Post ID# ~ ${set_postId})`)
console.log(findByPostId(set_postId))
console.log('\n')

console.log(`Find posts by user ID: (User ID# ~ ${set_userId})`)
console.log(findPostsByUserId(set_userId))