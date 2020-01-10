//Darius Rain
//Day 75: Create a person algorithm


/*
Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
*/


var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
    let firstName = firstAndLast.split(" ")[0].toString()
    let lastName = firstAndLast.split(" ")[1].toString()
    this.getFullName = function() {
      return `${firstName} ${lastName}`;
    };
    this.getLastName = () => {
        return lastName
    }
    this.getFirstName = () => {
        return firstName
    }
    this.setFirstName = (name) => {
    firstName = name
    return firstName
    }
    this.setLastName = (name) => {
        lastName = name
        return lastName
    }
    this.setFullName = (name) => {
        firstName = name.split(" ")[0].toString()
        lastName = name.split(" ")[1].toString()
        return `${firstName} ${lastName}`
    }
  };
  
  var bob = new Person('Bob Ross');
  console.log(bob.setLastName("Rain"));
  console.log(bob.setFirstName("Darius"));
  console.log(bob.getFullName())