//Darius Rain
//Day 81: Using Sets
/*


Sets only allow you to store one instance of a prmitive datatype (e.g String, Boolean, Object, Array & Number) with a unique value.


MDN ~ Syntax for a set: new set([iterable])

*/




const userNamePassAuth = new Set([]),
Users = [];


class NewUser {
    constructor(userName, password){
        function addUser(name){
            
            userNamePassAuth.add(name)
            Users.push(userName)
        }

        if(!userNamePassAuth.has(userName)){
            this.userName = userName.toString();
            this.password = password.toString();
            
            addUser(userName)
            console.log(`Username:${userName} has been added! `)

            
        }else {
            console.log(`${userName} is not available. Try another?`)
        }
       
        
    }
    
}



function register(name, password){

    new NewUser(name, password)

}






//Valid username
register("Bob", "Hankerchief")





//Invalid Username

register("Bob", "Hankerchief")



console.log('Username Set: \n')
userNamePassAuth.forEach(name => console.log('\n', name))
console.log('\n\nUser Array: \n', Users)
