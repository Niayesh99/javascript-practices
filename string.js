// @ts-nocheck
function isPalindromic(word) {
  const lowerCase = word.toLowerCase();
  const myArray = lowerCase.split("");
  const length = myArray.length;
  let result;
  for (let index = 0; index < length; index++) {
    if (myArray[index] !== myArray[length - index - 1]) {
      result = "No";
      console.log("No");
      return result;
    }
  }
  result = "Yes";
  console.log("Yes");
  return result;
}

/*isPalindromic("Noon");
isPalindromic("hello");
isPalindromic("Racecar");*/

function isPalindromic1(word) {
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

const firstWord = document.getElementById("Word1");
const palindromicButton = document.getElementById("Palindromic-button");
const resultElement = document.getElementById("result");
palindromicButton.addEventListener("click", () => {
  console.log("Button clicked! Input value:" + firstWord.value);
  const result = isPalindromic(firstWord.value);
  console.log(`Palindromic result is : ${result}`);
  resultElement.innerHTML = "Result : " + result;
});
