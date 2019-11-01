var arrayOfObjects = []

var accounts = new Object();

accounts.users = [];
accounts.admins = [];
accounts.population =  function (){
console.log(`Population of user Acccounts = ${accounts.users.length}`)
}



function addUser(name,  age) {
this.name = name;
this.age = age;

let tempArr = [`${name} ${age}`]
accounts.users = accounts.users.concat(tempArr)

}

function addAdmin(adminName) {
this.adminName = adminName;
let tempArr = [`${adminName}`]
accounts.admins = accounts.admins.concat(tempArr)

}

addUser(`John`, 29);
addAdmin(`Darius`, 23);
addUser(`James`, 24);
addUser(`Einstein`, 35);
console.log(`[accounts.users] "accounts" is an Object and "user" is a property that is an equal to an array of the following.`);
console.log(accounts.users)
console.log(``)
console.log(``)
console.log(`[accounts.admins] "accounts" is an Object and "admins" is a property that is an equal to an array of the following.`);
console.log(accounts.admins)
console.log(``)
console.log(``)
console.log(`[accounts.population()] "accounts" is an Object and "population" is a method calling it gives the folowing result.`);

accounts.population();
console.log(``)
console.log(``)
console.log(`[typeof(accounts)] = ${typeof(accounts)}`)
console.log(`(TEST PASSED: typeof() result = "${typeof(accounts)}"). And I successfully created and added data to an object`)

