//Darius Rain
//Algorithm: COnvert HTML entitities
//Date: 12/21/19

/*
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/

function convertHTML(str) {
    // &colon;&rpar;
    
    str = str.replace(/[&]/g,"&amp;").replace(/[<]/g, "&lt;").replace(/[>]/g, "&gt;").replace(/["]/g, "&quot;").replace(/[']/g, "&apos;")

    return str
  }
  
  console.log(convertHTML("Schindler's List"));
