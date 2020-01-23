

//Script code for node js app 1
const API_POST_URL = 'http://localhost:3000/posts'



let create_flex_item = document.getElementsByClassName('normal_flex_items'),
create_flex_container = document.getElementsByClassName('flex_container'),
body = document.getElementById("opacity_background"),
search_button = document.getElementById('search_button'),
search_div = document.getElementById('search_site'),
create_post_divbuttn = document.getElementById('create_post'),
post_box = document.getElementById('post_box'),
show_all_posts_divbttn = document.getElementById('show_posts')
all_posts_div = document.getElementById('all_posts'),
//button_delete = document.getElementsByClassName('delete_button')
post_button = document.getElementById('post_button');



search_button.addEventListener('click', show_search_bar);
create_post_divbuttn.addEventListener('click', show_post_box);
show_all_posts_divbttn.addEventListener('click', show_all_posts)
post_button.addEventListener('click', normalize)
//button_delete.addEventListener('click', deleteById)


// Access my api 

function normalize(){
    if(post_box.style.display != 'none'){
    //post_box.style.display = 'none'
    show_post_box()
    alert('Post succesfully sent')
    show_all_posts()
    }
}

function show_search_bar(){
    if(search_div.style.display === 'none'){
    search_div.style.display = 'block';
    search_button.innerText = 'Hide search';
    
    }else {
        search_div.style.display = 'none'
        search_button.innerText = 'Show search'
        
    }
}




function show_post_box(){

    if(post_box.style.display === 'none'){
    
       post_box.style.display = 'block';
       post_box.style.opacity = "1 !important"
      
        body.style.opacity = "0.6";
        create_post_divbuttn.style.backgroundColor = 'red';

        create_post_divbuttn.firstElementChild.innerText = 'CANCEL?';
        
        }else {
            post_box.style.display = 'none';
            body.style.opacity = "1";
            create_post_divbuttn.style.backgroundColor = 'white';



            create_post_divbuttn.firstElementChild.innerText = 'Create TO-DO?';
            
        }

}

async function show_all_posts(){

  const Xhr = new XMLHttpRequest;

  await Xhr.open('GET', API_POST_URL, true)


  Xhr.onload = () => {
   

    if(!all_posts_div.firstElementChild){
      data = JSON.parse(Xhr.responseText);
     // console.log(data.reverse());
  
      show_all_posts_divbttn.firstElementChild.innerText = 'Hide TO-DOs';
     
      for(index in data){
        let div = document.createElement('div'),
        h2 = document.createElement('h2'),
        kbd = document.createElement('kbd'),
        breakSt = document.createElement('br'),
        horzBreak = document.createElement('hr'),
        button_delete = document.createElement('button');
        button_delete.setAttribute('data-id', data[index]._id)
        button_delete.innerText = 'Delete';
        //button_delete.className = 'delete_button'
      div.style.borderStyle = 'solid';
      kbd.innerText = `${data[index].name}`;
      kbd.style.fontSize = '20px'
      h2.innerText = `${data[index].content}`;

      div.appendChild(kbd);
      div.appendChild(horzBreak);
      div.appendChild(h2);
      div.appendChild(button_delete);
     // div.appendChild(button_edit)
      //  div.appendChild(breakSt);




      all_posts_div.appendChild(div)
        all_posts_div.appendChild(breakSt)




        button_delete.addEventListener('click', deleteById)
        data.reverse()
      //  \n\n ${data[index].content}`
  
      }
  }else {
    show_all_posts_divbttn.firstElementChild.innerText = 'Show To-Dos'

    while(all_posts_div.firstChild){
        all_posts_div.removeChild(all_posts_div.firstChild)
    }    
}
  }
  Xhr.send()


}


function deleteById() {
console.log(this.getAttribute('data-id'))

// const Xhr = new XMLHttpRequest;

// Xhr.open('delete', `${API_POST_URL}/${this.getAttribute('data-id')}`, true)

// Xhr.onload = () => {
//   console.log(Xhr.responseText)
// }

// Xhr.send()
let id = this.getAttribute('data-id')
deleteReq = {id}




fetch(
  API_POST_URL + '/' + id,
  {
      method: 'DELETE',
      body: JSON.stringify(deleteReq),
      headers: {
        'content-type': 'application/json'
    }


  }
  ).then( res => res.text())
  .then(res => console.log(res))
}






// Handling form data here


const form = document.querySelector('form');



//Form event listener



form.addEventListener('submit', (event) => {
    event.preventDefault();
    const form_data = new FormData(form);
    const name = form_data.get('name');
    const content = form_data.get('content');

    const new_post = {
        name, 
        content
    }

    console.log(`Form was submitted!`)
    console.log(new_post)

    fetch(
        API_POST_URL,
        {
            method: 'POST',
            body: JSON.stringify(new_post),
            headers: {
                'content-type': 'application/json'
            }
        }
        )

})
