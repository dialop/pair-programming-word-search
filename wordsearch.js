/* 
Exercise:
For this challenge, you'll be implementing a word search solver, as a 
function that receives a 2D array of letters and a word. The function must:

Check to find the word horizontally and vertically
Return true if the word is found, and return false if the word is not found

This challenge comes with some initial (buggy!) code. We suggest approaching this problem with a TDD mindset, 
meaning "write tests, make the tests pass, repeat!"

There are already some tests in ./test/test_wordsearch.js, and you can run the tests with npm test. 
You'll find that one of the tests doesn't pass yet, so you'll want to start by editing the code in wordsearch.js to allow the tests to pass.

Instruction
Fork and clone the challenge repository inside our net directory.
*/



const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''));  
    //creates an array horizontalJoin by mapping over each row (ls) in the letters array. Converts the array of characters into a string by using .join(''), effectively creating an array of horizontal strings.
    
    // Check horizontally
    for (const l of horizontalJoin) {        // loops iterates through each horizontal string (l) in the horizontalJoin array
      if (l.includes(word)) return true;       // checks if the current horizontal string contains the target word
    }
  
    // Transpose the 2D array to check vertically
    const verticalJoin = letters[0].map((_, colIndex) => letters.map(row => row[colIndex]).join('')); //transposes the 2D letters array to create an array of vertical strings
    
    /* the verticalJoin mapping over the first row (letters[0]) and for each column index (colIndex), 
    it maps over each row in letters and extracts the character at the corresponding column index,
    effectively creating an array of vertical strings
    */


    // Check vertically
    for (const l of verticalJoin) {  // loop iterates through each vertical string
      if (l.includes(word)) return true;   // Similar to the horizontal checking, this line checks if the current vertical string contains the target word
    }
    
    return false;
  };
  
  module.exports = wordSearch;