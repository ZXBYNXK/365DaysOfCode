//Script code for node js app 1
const API_POST_URL = "http://localhost:3000/posts";

//Here I use DOM selectors to select the wanted html elements from the DOM (Document Object Model)
let create_flex_item = document.getElementsByClassName("normal_flex_items"),
  create_flex_container = document.getElementsByClassName("flex_container"),
  body = document.getElementById("opacity_background"),
  search_button = document.getElementById("search_button"),
  search_div = document.getElementById("search_site"),
  create_post_divbuttn = document.getElementById("create_post"),
  post_box = document.getElementById("post_box"),
  show_all_posts_divbttn = document.getElementById("show_posts");
(all_posts_div = document.getElementById("all_posts")),
  //button_delete = document.getElementsByClassName('delete_button'),
  (post_button = document.getElementById("post_button"));

//Add Event listners using some of the above variables.
search_button.addEventListener("click", show_search_bar);
create_post_divbuttn.addEventListener("click", show_post_box);
// Method 1: (Event Listener for method 1 of retrieving data.)
//show_all_posts_divbttn.addEventListener('click', show_all_posts);

//Method 2: ()
show_all_posts_divbttn.addEventListener("click", get_posts);

//post_button.addEventListener('click', normalize);
//button_delete.addEventListener('click', deleteById)

// Access my api

function normalize() {
  if (post_box.style.display != "none") {
    //post_box.style.display = 'none'
    show_post_box();
    alert("Post succesfully sent");
    show_posts();
  }
}

function show_search_bar() {
  if (search_button.innerText === "Search") {
    search_div.style.display = "block";
    search_button.innerText = "Hide search";
  } else {
    search_div.style.display = "none";
    search_button.innerText = "Search";
  }
}

function show_post_box() {
  if (post_box.style.display === "none") {
    post_box.style.display = "block";
    post_box.style.opacity = "1 !important";

    body.style.opacity = "0.6";
    create_post_divbuttn.style.backgroundColor = "red";

    create_post_divbuttn.firstElementChild.innerText = "CANCEL?";
  } else {
    post_box.style.display = "none";
    body.style.opacity = "1";
    create_post_divbuttn.style.backgroundColor = "white";
    create_post_divbuttn.firstElementChild.innerText = "Create TO-DO?";
  }
}

//Method 1
// async function show_all_posts(){
//   let id_gen = 0;
//   const Xhr = new XMLHttpRequest;

//   await Xhr.open('GET', API_POST_URL, true)

//   Xhr.onload = () => {

//     if(!all_posts_div.firstElementChild){
//      let data = JSON.parse(Xhr.responseText);
//       data = data.reverse()
//       show_all_posts_divbttn.firstElementChild.innerText = 'Hide TO-DOs';

//       data.forEach(object => {
//         console.log(object)
//         let div = document.createElement('div'),
//         h2 = document.createElement('h2'),
//         kbd = document.createElement('kbd'),
//         breakSt = document.createElement('br'),
//         horzBreak = document.createElement('hr'),

//         button_delete = document.createElement('button');
//         button_delete.id = `${id_gen += 1}`;
//        let  button_delete_val = document.getElementById(`${id_gen}`);
//         button_delete.setAttribute('data-id', object._id.toString())
//         button_delete.setAttribute('href', '#')
//         button_delete.innerText = 'Delete';
//           //button_delete.className = 'delete_button'
//       div.style.borderStyle = 'solid';
//       kbd.innerText = `${object.name}`;
//       kbd.style.fontSize = '20px'
//       h2.innerText = `${object.content}`;

//       div.appendChild(kbd);
//       div.appendChild(horzBreak);
//       div.appendChild(h2);
//       div.appendChild(button_delete);
//      // div.appendChild(button_edit);
//     //  div.appendChild(breakSt);

//       all_posts_div.appendChild(div);
//         all_posts_div.appendChild(breakSt);
//         button_delete_val.addEventListener('click', deleteById);
//       //  \n\n ${object.content}`
//       })

//   }else {

//     show_all_posts_divbttn.firstElementChild.innerText = 'Show To-Dos'

//     while(all_posts_div.firstChild){
//         all_posts_div.removeChild(all_posts_div.firstChild)
//     }
//     return
// }
//   }

//   return Xhr.send()
// }

async function get_posts() {
  await fetch(API_POST_URL)
    .then(data => {
      return data.json();
    })
    .then(json => {
      //console.log(json)
      display_posts(json);
    })
    .catch(err => console.log(err));
}

function display_posts(json_data) {
  //console.log(json_data)
  
  console.log(show_all_posts_divbttn.innerText);
  if (show_all_posts_divbttn.firstElementChild.innerText == "Show Posts") {
    show_all_posts_divbttn.firstElementChild.innerText = "Hide Posts";
    json_data = JSON.parse(JSON.stringify(json_data));
    json_data.reverse()
  
    json_data.forEach(element => {
      let empty_h2 = document.createElement("h2");
      let empty_span = document.createElement("span");
      let blank_button = document.createElement("button"),
        blank_button2 = document.createElement("button");
      let empty_div1 = document.createElement("div"),
        empty_div2 = document.createElement("div");

      blank_button.innerText = "✖";
      blank_button2.innerText = "📝";
      blank_button.style.fontSize = '20px'
      blank_button2.style.fontSize = '20px'
      blank_button.style.backgroundColor = "red";
      blank_button.style.borderColor = "black";
      blank_button.style.width = "5%";
      blank_button.style.boxShadow = ' 1px 2px 2px';
      blank_button2.style.boxShadow = ' 1px 2px 2px'
     // blank_button.style.padding = "10px";
      blank_button.style.borderRadius = "10px";
      blank_button.style.margin = "3px";
      blank_button.style.float = "left";
      blank_button.setAttribute("data-id", `${element._id}`);
      blank_button.addEventListener("click", deleteById);

      blank_button2.style.backgroundColor = "#60b0f4";
      blank_button2.style.margin = "3px";
      blank_button2.style.width = "5%";
      blank_button2.style.borderColor = "black";
      //blank_button2.style.padding = "10px";
      blank_button2.style.borderRadius = "10px";
      blank_button2.style.float = "left";
      blank_button2.setAttribute("data-id", `${element._id}`);
      blank_button2.addEventListener("click", deleteById);

      empty_div1.style.margin = "0 auto";
      empty_div1.style.marginBottom = "15px";
      empty_div1.style.backgroundColor = "white";
      empty_div1.style.boxShadow = "1px 2px 2px";
      empty_div1.style.borderRadius = "12px";
      empty_div1.style.borderStyle = "solid";
      empty_div1.style.borderColor = "black";
      empty_h2.fontSize = "30px";
      empty_h2.innerText = `\n${element.name}\n`;
      empty_div1.appendChild(blank_button);
      empty_div1.appendChild(blank_button2);
      empty_div1.appendChild(empty_h2);

      empty_div2.style.margin = "0 auto";
      empty_div2.style.width = "99%";
      empty_div2.style.backgroundColor = "#fdc794";
      empty_span.style.fontSize = "25px";
      empty_span.innerText = `\n${element.content}\n`;
      empty_div2.appendChild(empty_span);

      all_posts_div.appendChild(empty_div1).appendChild(empty_div2);
    });
  } else {
    show_all_posts_divbttn.firstElementChild.innerText = "Show Posts";
    while (all_posts_div.firstElementChild) {
      all_posts_div.removeChild(all_posts_div.firstElementChild);
    }
  }
}

async function deleteById() {

  event.preventDefault()
  const id = this.getAttribute('data-id');
  deleteReq = { __id: id};

 await fetch(API_POST_URL + "/" + id, {
    method: "DELETE",
    body: JSON.stringify(deleteReq),
    headers: {
      "content-type": "application/json"
    }
  });
  console.log(`Deleted post: ${id}`);
  alert('Deleted Post')
  location.reload()
}

// Handling form data here

const form = document.querySelector("form");

//Form event listener

form.addEventListener("submit", event => {
  event.preventDefault();
  const form_data = new FormData(form);
  const name = form_data.get("name");
  const content = form_data.get("content");

  const new_post = {
    name,
    content
  };

  console.log(`Form was submitted!`);
  console.log(new_post);

  fetch(API_POST_URL, {
    method: "POST",
    body: JSON.stringify(new_post),
    headers: {
      "content-type": "application/json"
    }
  });
  return location.reload()
});
