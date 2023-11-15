function isPalindrome(word) {
  // First step is to take the argument and make it a string
  let str = word.toString();

  // Second step is to reverse the string
  let reversedStr = str.split("").reverse().join("");
  // Third step is to compare the original string to the reversed string
  if (str === reversedStr) {
    return true;
  } else {
    return false;
  } 
}

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
