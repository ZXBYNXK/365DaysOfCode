//Darius Rain
//Algorithms: Truncate a string.
//Date: 11-18-19

function truncateString(str, num) {
  // Clear out that junk in your trunk
  let result = '';
  for(let i=0; i < str.length; i++ ){
  	//console.log(i)
  	if(i < num){
  	result += str[i]
  	}
  
  
  }
  console.log(`${result}...`);
}

truncateString("A-tisket a-tasket A green and yellow basket", 20);
