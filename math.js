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
}

