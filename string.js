function isPalindromic(word) {
  const lowerCase = word.toLowerCase();
  const myArray = lowerCase.split("");
  const length = myArray.length;

  for (let index = 0; index < length; index++) {
    if (myArray[index] !== myArray[length - index - 1]) {
      console.log("No");
      return;
    }
  }
  console.log("Yes");
}

/*isPalindromic("Noon");
isPalindromic("hello");
isPalindromic("Racecar");*/



function isPalindromic(word) {
    const normalizedWord = word.toLowerCase(); 
    const reversedWord = normalizedWord.split("").reverse().join(""); 
  
    if (normalizedWord === reversedWord) {
      console.log("Yes"); 
    } else {
      console.log("No"); 
    }
  }
  
  
  /*isPalindromic("Noon");    
  isPalindromic("hello");   
  isPalindromic("Racecar");*/
  