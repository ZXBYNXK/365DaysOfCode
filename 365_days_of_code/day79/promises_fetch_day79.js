//Darius Rain
//Day 79: Using promises with data being fetched with the XMLHttpRequest method.

/*
Later on i plan on doing this with my own Rest API
but for now i will use https://jsonplaceholder.typicode.com/posts 
*/
let response = document.getElementById('response')

function getPosts() {
const Xhr = new XMLHttpRequest;
Xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true)

Xhr.onload = () => {
    const parsedData = JSON.parse(Xhr.responseText)
    console.log(parsedData)
}

Xhr.send()
}



function getUsers() {
    let count = 0
const Xhr = new XMLHttpRequest;
Xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true)

Xhr.onload = () => {
    const parsedData = JSON.parse(Xhr.responseText)
    parsedData.forEach(user => response.innerHTML += `<br><div align="center" style="background-color: blue; color: white; margin: 2px; position: stuck;">${++count} <a style="color: black" href="#"><hr> Username: ${user.name}</a>     <hr>          Email: ${user.email}     <hr>                  Id: ${user.id}</div>`)
}

Xhr.send()
}

getPosts()
getUsers()

 


