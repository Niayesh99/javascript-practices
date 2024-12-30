function factorial(number) {
  let result;
  for (let index = 1; index <= number; index++) {
    if (index === 1) {
      result = 1;
    }
    if (index === 2) {
      result = 2;
    } else {
      result = result * index;
    }
  }
  console.log(result);
  return result;
}

function fibonacci(count) {
  let sequence = [];
  for (let index = 0; index < count; index++) {
    if (index === 0 || index === 1) {
      sequence[index] = 1;
    } else {
      sequence[index] = sequence[index - 2] + sequence[index - 1];
    }
  }
  console.log(sequence);
  return sequence;
}


const inputNumber = document.getElementById("Number");
const factorialButton = document.getElementById("Factorial-button");
const fibonacciButton = document.getElementById("Fibonacci-button");
const resultNumber = document.getElementById("result");

factorialButton.addEventListener("click", () => {
  const number = parseInt(inputNumber.value.trim(), 10);
  if (isNaN(number) || number < 0) {
    resultNumber.innerHTML =
      "Result: Please enter a valid non-negative number.";
    return;
  }
  const result = factorial(number); 
  resultNumber.innerHTML = `Result: ${result}`; 
});


fibonacciButton.addEventListener("click", () => {
  const count = parseInt(inputNumber.value.trim(), 10);
  if (isNaN(count) || count <= 0) {
    resultNumber.innerHTML = "Result: Please enter a valid positive number.";
    return;
  }
  const sequence = fibonacci(count); 
  resultNumber.innerHTML = `Result: ${sequence.join(", ")}`;
});
