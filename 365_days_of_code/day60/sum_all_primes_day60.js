//Darius Rain
//Algorithm: Sum all prime numbers
//Date: 12/25/19
/*
Used a while loop to iterate through
out a range of numbers starting from the minimum (1) and the maximum value from the 'num' paramater (1,2,3...,x,x num) in the sum_all_primes(num) function.
And if the function returns a value of false then it is not a prime number, reffering to the current number at the time.
*/


const sum_all_primes = (num) => { 

let test = 1,

count = 0, 


is_prime = (count) => { 

for (let test = 2; test < count; test++) { 

if (count % test === 0) return false; 

}

 return count !== 1 && count !== 0;

 };



while (test <= num) { 

 if (is_prime(test)) { 

 count += test; 

 } 

test++; 

} 

return count;

 } 



console.log(sum_all_primes(20));