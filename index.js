function isPalindrome(word) {
  // Write your algorithm here
  let array = word.split('');
  let newArray = [...array];
  newArray.reverse('');
  let normal = array.join('');
  let reverse = newArray.join('');
  if (normal === reverse){
      return true
  }else {return false}

}

/* 
  Add your pseudocode here

  create variable array to store word param and split into letters
  create variable newArray to push and spread letters of array
  reverse all the letters in newArray

  create variable normal to convert array to string
  create variable reverse to convert newArray to string

  iterate over both arrays:
    if normal equals reverse:
      return true
      otherwise return false
*/

/*
  Add written explanation of your solution here
  isPalindrome function takes in a word and returns 'true' if that
  word is a palindrome and false if it isn't
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));
  console.log("=>", isPalindrome("radar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  console.log("=>", isPalindrome("hello"));
}

module.exports = isPalindrome;
