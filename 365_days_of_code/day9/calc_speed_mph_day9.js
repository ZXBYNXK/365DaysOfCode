// Darius Rain                                              Day 9 of Code                     			         Date:11-4-19

//	Day 8 project is not a part of this one, I am unable to proceed with the login system, becuase of lack of knowledge.
//	sorry about that a lesson fot future days, to do my research. The problem was that I can code something that appears to be
// 	a login system but it really is not.


//		Todays project I will be doing some math with `S = d/t` to calculate speed in miles per hour.
//	1. Use the readline module `require('readline')` 
// 	2. Use an algorithm which is the one above `Speed = Distance / Time`
// 	3. Use arrays to hold the data to calculate.

	var readline = require('readline');
	var rl = readline.createInterface({

	input: process.stdin,
	output: process.stdout
	
});



	var theSpeedConverter = function() { 
console.log(`What is the Distance in miles (only numbers ex: 10 or 10.5)`)
	console.log(``);
rl.question('', function(distance){
console.log(`Distance Confirmed: ${distance} miles`);
	console.log(``);
console.log(`Now what is the time of expected travel in hours (only numbers ex: 10 or 10.5))`);
        rl.question('', function(time){
	distance = parseInt(distance)
	time = parseInt(time);
	let speed = distance/time;
	console.log(``);
	console.log(`You would haft to drive a speed of ${speed} mph to make ${distance} miles in ${time} hour(s) worth of time.`);
	rl.close();

























});
});


		}

theSpeedConverter();
