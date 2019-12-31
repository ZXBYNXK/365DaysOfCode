//Darius Rain
//Date: 12/31/19
//Use the for in loop to iterate through object keys



countOnline = (usersObj) => {
  
    let count = 0;
    for(let users in usersObj){
      if (usersObj[users].online)[
        ++count
      ]
    }
 
    // change code above this line
  }
  console.log(countOnline({ Alan: { online: false }, Jeff: { online: true }, Sarah: { online: false } }))