//Darius Rain
//Algorithm: Find falsey values in a given array of objects, use a function with two paramaters one containing the array of objects to check, the other the property value to check for 
// either a falsey or truthy value. 
//Day 77


//Parameter -> 'collection' : is the array of objects
//Parameter -> 'pre' : is the value of the property/key ex: object = { *[property/key*: value, }
function truthCheck(collection, pre) {
    // Is everyone being true?
  
  for(let i = 0; i < collection.length; i++){


    //In this if else statement it will automatically check boolean values in the if() or else if() operatror. So anything converted to falsey value inside those parenthesis will evaluate
    // to a true or false value thus determining in this case a 50/50 outcome to either return false or proceed if true. 
  if(collection[i][`${pre}`]){
    //Dont need code here
  }else {

    //This ends the program and returns false
    return false
  }
  
  
  }

  //If all ran well then return true
  return true
  
  }
  console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));
  