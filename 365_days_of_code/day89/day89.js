//Darius Rain
//Day 89: Getting familiar with the features of map.

let map = new Map();
let ids = 0
function genId() {
 return (ids += 1).toString()

}
map.set(genId(), 'John')
.set(genId(), 'Amy');

console.log(map.get('1')); // v1

console.log(map.has('2')); // true

for (let ids of map.entries())
  console.log(ids[0] + " : " + ids[1]);
  
  
  
  