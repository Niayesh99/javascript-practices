// @ts-nocheck

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
const additionResult = add(2, 4);
const subtractionResult = subtract(2, 4);
const multiplicationResult = multiply(2, 4);
const divisionResult = divide(2, 4);
console.log(`Result of addition is :${additionResult}`);
console.log(`Result of subtract is :${subtractionResult}`);
console.log(`Result of multiply is :${multiplicationResult}`);
console.log(`Result of divide is :${divisionResult}`);
// @ts-ignore
const firstNumber = document.getElementById("Number1");
const secondNumber = document.getElementById("Number2");
const addButton = document.getElementById("add-button");
const resultElement = document.getElementById("result");
addButton.addEventListener("click", () => {
  // Get the updated value of the input when the button is clicked
  console.log("Button clicked! Input value:", firstNumber.value);
  console.log("Button clicked! Input value:", secondNumber.value);
  const result = add(Number(firstNumber.value), Number(secondNumber.value));
  console.log(`Add result is : ${result}`);
  resultElement.innerHTML = "Result : " + result;
});
const subtractButton = document.getElementById("subtract-button");
subtractButton.addEventListener("click", () => {
  // Get the updated value of the input when the button is clicked
  console.log("Button clicked! Input value:", firstNumber.value);
  console.log("Button clicked! Input value:", secondNumber.value);
  const result = subtract(
    Number(firstNumber.value),
    Number(secondNumber.value)
  );
  console.log(`Subtract result is : ${result}`);
  resultElement.innerHTML = "Result : " + result;
});
const multiplyButton = document.getElementById("multiply-button");
multiplyButton.addEventListener("click", () => {
  // Get the updated value of the input when the button is clicked
  console.log("Button clicked! Input value:", firstNumber.value);
  console.log("Button clicked! Input value:", secondNumber.value);
  const result = multiply(
    Number(firstNumber.value),
    Number(secondNumber.value)
  );
  console.log(`Multiply result is : ${result}`);
  resultElement.innerHTML = "Result : " + result;
});
const divideButton = document.getElementById("divide-button");
divideButton.addEventListener("click", () => {
  // Get the updated value of the input when the button is clicked
  console.log("Button clicked! Input value:", firstNumber.value);
  console.log("Button clicked! Input value:", secondNumber.value);
  const result = divide(Number(firstNumber.value), Number(secondNumber.value));
  console.log(`Divide result is : ${result}`);
  resultElement.innerHTML = "Result : " + result;
});
