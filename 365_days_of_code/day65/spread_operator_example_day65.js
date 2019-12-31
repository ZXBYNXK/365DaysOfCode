//Darius Rain
//Day 65: Use spread operator ('...array') to add contents from another array into a new array.
//Date: 12/30/19

spreadOut = () => {
    let fragment = ['to', 'code'];
    let sentence = 'learning is fun'; 

    sentence = sentence.split(' ')
  
    sentence = [sentence[0], ...fragment, ...sentence.slice(1)]
    return sentence;
  }
  
 
  console.log(spreadOut());
    //Output should be ['learning', 'to', 'code', 'is', 'fun']