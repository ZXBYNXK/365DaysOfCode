var storesGlobal = {
			stores: [],
			listStores: function(){for(let i = 0; i < storesGlobal.stores.length; i++){console.log(storesGlobal.stores[i]) 
			}adminMenu()},
			addStore: function(storeName, storeLocation, storeOwner){
			let stringName = `${storeName}`
			storeName = {
						name: `${stringName}`,
						owner: `${storeOwner}`,
						location: `${storeLocation}`,
						merchandise: [],
						}
			let temp = [storeName];
			this.stores = this.stores.concat(temp)
			
			},
	}




var readline = require('readline');
var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout

})


var adminMenu = function () {
console.log(``)
console.log(`                          Menu`)
console.log(`---------------------------------------------------------`)
console.log(`|(1) **Add a store** | (2) **See stores** | (3) **Exit**|`)
console.log(`---------------------------------------------------------`)
console.log(`                                    Made By: Darius Rain `)
console.log(``)


rl.question(``, function (option){
switch(parseInt(option)) {
	case 1:
	storeRegister();
	break;
	
	case 2:
	storesGlobal.listStores()
	break;

	case 3:
	rl.close();
	break;
  
  default:
  adminMenu();
  break;	
}
})
}

var storeRegister = function() {
rl.question(`StoreName?   `, function(store){
rl.question(`Store Location?   `, function(location){
rl.question(`Owner Name?   `, function(owner){

		storesGlobal.addStore(store, location, owner)
console.log(``)
console.log(`Registered! (${store}, ${location} ${owner})`)
console.log(``)	
adminMenu();
})
})
})

}
//storeRegister();

adminMenu();
//storesGlobal.addStore("WalMart", "East Providence", "Jacob Miller")
	
