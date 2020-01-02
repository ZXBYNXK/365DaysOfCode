//Darius Rain
//Day: 67
//Date: 1/1/2020
/* 
    **Day67 ~ Create a class that uses the constructor function.**



    
                                                 Examples
    
__________________________________________________________________________________________________
                                           class Polygon {
                                             constructor() {
                                               
                                                this.name = "Polygon";
                                             }
                                          }

                                           const poly1 = new Polygon();

                                           console.log(poly1.name);
                                        
                                        
                                        
                                        
                                        
                                           expected output: "Polygon"

                                           



__________________________________________________________________________________________________




Syntax: constructor([arguments]) { ... }



    Resource information from MDN: (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor)
    "The constructor method is a special method for creating and initializing an object created within a class."


*/



//Initialize the class
class Account {

    //Add paramater(s) to the constructor method
    constructor(name, age, dob, bio){
      
        
//Assign the paramater values to the 'this' global object which the global object in this case is 'Account' ~(The class itself)
   //When the 'new' syntax is used to generate a new occurrance of an object (variableName = new classObjectName(paramaters...) 
     // In this case ( user1 = new Account(name, age, dob, bio) ) 

       this.name = name;
       this.age = age;
       this.dob = dob;
       this.bio = bio;
      }

      

     //Added this function to display the information for this object.
      displayAccountInfo = () => {
          return `\n User:${this.name} \n Age:${this.age} \n Bio: ${this.bio}`
      }
}


// Feel free to add users if you are testing this program
const user1 = new Account("John Smith", "23", "1/1/1996", "I John and I LOVE CODING!!!"),
user2 = new Account("Jake Smith", "23", "1/1/1996", "I am John's evil twin who HATES CODING!!!");

console.log(user1.displayAccountInfo())
console.log(user2.displayAccountInfo())