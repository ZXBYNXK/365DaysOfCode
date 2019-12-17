
function runProgram(){

var readline = require('readline')
var rl = readline.createInterface({
input: process.stdin,
output: process.stdout
})
var activePlayer;
var playerCensus = [];
var idEngine = 0;

var storeId = function(){
idEngine += 1;
}
var player = function (name, password) {
storeId();
console.log(typeof(name))
let obj = {}
obj.name = name

obj.wins = 0
obj.losses = 0
obj.ties = 0
obj.record = `${obj.wins}-${obj.losses}-${obj.ties}`
obj.totalPlayed = obj.wins + obj.losses + obj.ties
obj.lifePoints = 5000
obj.playerAdress = idEngine
obj.password = password;
obj.playerMenu = function () {
console.log(`Welecome User-Name:${obj.name} | Life-Points: ${obj.lifePoints}`)
//gameMenu();

}

temp = [obj]
playerCensus = playerCensus.concat(temp);

console.log(`Player: ${name} can now login!!!`)
menu()
}



var loginValidate = function() {
   console.log('login')
   rl.question(`UserName   `, function(username){
   rl.question(`Password   `, function(password){
   
   for(let i=0; i < playerCensus.length; i++){
   
   if(username === playerCensus[i].name && password === playerCensus[i].password){
   activePlayer = i
   playerCensus[i].playerMenu()
   
   }
   }
   
   
   
   })
   })
   }




var addPlayer = function(){
rl.question('Register UserName   ', function(userName1){
rl.question('UserName Confirmation...   ', function(userName2){
if(userName1 === userName2){
rl.question(`${userName1}'s Password?     `, function(password1){

rl.question(`${userName1}'s Password Confirmation...   `, function(password2){
if(password1 === password2){
player(userName1, password1)

}else{
console.log(`${password1} and ${password2} dont match!`)
menu()
}
})
})
}else{
console.log(`${userName1} and ${userName2} does not match!`)
menu();
}
})
})
}

var adminMenu = function() {
var deleteUser = function() {
rl.question(`PID?`, function(pid) {
for(let i=0; i < playerCensus.length; i++) {
console.log(i)
if(playerCensus[i].playerAdress == pid) {
console.log(`Deleted ${playerCensus[i].name}'s account!`)
playerCensus.splice(i, 1)
adminMenu()
}
}



}) 
}
var see = function() {
console.log(`User Data`)
console.log(playerCensus)
adminMenu();

}
console.log('')
console.log('')
console.log('')
console.log('')
console.log('')

console.log('')
console.log('')
console.log('')
console.log('')
console.log('')
console.log('')
console.log('Admin Menu')
console.log('1: Delete user')
console.log('2: See user data')
console.log('3: Change user data')
console.log('4: Main Menu')
rl.question('',function(option){
switch(parseInt(option)){
case 1: 
deleteUser();
break;

case 2:
see()
break;

case 3:
//changeData()
break;

case 4:
menu()
break;

default:
adminMenu()
break;


}
})
}














var menu = function() {
console.log('')
console.log('')
console.log('')
console.log('')
console.log('')

console.log('')
console.log('')
console.log('')
console.log('')
console.log('')
console.log('')

console.log("Main Menu")
console.log('AdMiNmEnU: For Hidden Admin Menu, if a legit program this wouldnt be console logged')
console.log('1: Register')
console.log('2: Login')
console.log('3: Exit')
console.log('____________________________________')
rl.question('', function(option){
switch(option) {
   case '1':
   addPlayer()
   break;
   
   case '2':
   loginValidate()
 
   break;

   case '3':
   rl.close()
   break;
   
   case 'AdMiNmEnU':
   adminMenu();
   break;
   
   default:
   menu();
   break;

}
})


}
menu();
}


runProgram()
