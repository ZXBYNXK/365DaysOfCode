//Darius Rain   
//Day 72: Create a tree data structure
/*
In this example i will create a tree with three decendents(child nodes)
*/


//Initialize a class to hold new instances of values.
class DataTree {
    //Create a constructor that takes the paramater's value and adds to the folllowing property below 'this.value'
    //And the child nodes property can used later on to add child nodes pertaining to any variable that has a new instance of the above class.
    constructor(value){
        this.value = value;
        this.childNodes = []
    }

}


//Here you can add all the branches you know your going to add, suprisingly root isnt root yet at this point becuase there is no value(s) 
//in the childNodes property.


const root = new DataTree('Root'),
    trunk = new DataTree('Trunk'),
    branch1 = new DataTree('Branch 1'),
    branch2 = new DataTree('Branch 2'),
    branch3 = new DataTree('Branch 3');
    
//This is where root becomes legit ROOT becuse it contains only one child node in the 'childNodes' property (value: array) which is now 'Trunk'. What defines it
//as root all around is becouse none of the the instances of 'Data Tree' has 'root' as one of the values inside the 'childNodes' property
root.childNodes.push('Trunk')
//Now when you want to add child nodes then you do the same as above and below to branch1 2 & 3.
trunk.childNodes.push(branch1, branch2, branch3)

console.log('Root of all:      ',root)
console.log('Trunk of root:      ',trunk)
console.log('Branch 1 of trunk:      ', branch1)
console.log('Branch 2 of trunk:      ',branch2)
console.log('Branch 3 of trunk:      ',branch3)




























