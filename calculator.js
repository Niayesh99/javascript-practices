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

function gcd(number1, number2) {
  let divisorsNum1 = [];
  let divisorsNum2 = [];
  let commonDivisors = [];
  for (let index = 1; index < number1; index++) {
    const remainder = number1 % index;
    if (remainder === 0) {
      divisorsNum1.push(index);
    }
  }
  for (let index = 1; index < number2; index++) {
    const remainder = number2 % index;
    if (remainder === 0) {
      divisorsNum2.push(index);
    }
  }
  commonDivisors = divisorsNum1.filter((num) => divisorsNum2.includes(num));
  console.log(commonDivisors);
  let max = 0;
  for (let index = 0; index < commonDivisors.length; index++) {
    if (commonDivisors[index] > max) {
      max = commonDivisors[index];
    }
  }
  console.log(max);
}

const additionResult = add(2, 4);
const subtractionResult = subtract(2, 4);
const multiplicationResult = multiply(2, 4);
const divisionResult = divide(2, 4);
console.log(`Result of addition is :${additionResult}`);
console.log(`Result of subtract is :${subtractionResult}`);
console.log(`Result of multiply is :${multiplicationResult}`);
console.log(`Result of divide is :${divisionResult}`);

const firstNumber = document.getElementById("Number1");
const secondNumber = document.getElementById("Number2");
const addButton = document.getElementById("add-button");
const resultElement = document.getElementById("result");
addButton.addEventListener("click", () => {
  console.log("Button clicked! Input value:", firstNumber.value);
  console.log("Button clicked! Input value:", secondNumber.value);
  const result = add(Number(firstNumber.value), Number(secondNumber.value));
  console.log(`Add result is : ${result}`);
  resultElement.innerHTML = "Result : " + result;
});
const subtractButton = document.getElementById("subtract-button");
subtractButton.addEventListener("click", () => {
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
  if (Number(secondNumber.value) === 0) {
    const alertContainer = document.getElementById("alert-container");
    alertContainer.innerHTML = `<div id="error-alert" class="alert alert-danger alert-dismissible fade show" role="alert">
      Can't divide by zero!
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`;
  } else {
    console.log("Button clicked! Input value:", firstNumber.value);
    console.log("Button clicked! Input value:", secondNumber.value);
    const result = divide(
      Number(firstNumber.value),
      Number(secondNumber.value)
    );
    console.log(`Divide result is : ${result}`);
    resultElement.innerHTML = "Result : " + result;
  }
  /*const alertElement = document.getElementById("error-alert");
  if (alertElement) {
    // Remove the "show" class to hide the alert (Bootstrap automatically handles fade-out)
    alertElement.classList.remove("show");
    alertElement.classList.add("fade"); // Ensures proper dismissal animation
  }
  */
});
