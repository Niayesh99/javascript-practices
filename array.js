let names = ["Alex", "Anna", "Mia", "Joe"];

function getRandomName(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  const randomName = array[randomIndex];
  return randomName;
}

function alphabeticSort(array) {
  return array.sort();
}

function descendingSort(array) {
  return array.sort().reverse();
}

function addElement(element, array) {
  array.push(element);
  console.log(array);
  return array;
}

function removeValue(array, value) {
  const index = array.indexOf(value);
  if (index !== -1) {
    array.splice(index, 1);
  }
  return array;
}

const inputArray = document.getElementById("Array");
const randomButton = document.getElementById("random-button");
const sortAscendingButton = document.getElementById("Asort-button");
const sortDescendingButton = document.getElementById("dsort-button");
const addButton = document.getElementById("add-button"); 
const removeButton = document.getElementById("remove-button");
const resultElement = document.getElementById("result"); 

randomButton.addEventListener("click", () => {
  const array = inputArray.value.split(",").map((name) => name.trim());
  const result = getRandomName(array);
  resultElement.innerHTML = "Result : Random name: " + result;
});

sortAscendingButton.addEventListener("click", () => {
  const array = inputArray.value.split(",").map((name) => name.trim());
  const sortedArray = alphabeticSort(array);
  resultElement.innerHTML = "Result : Ascending Sort: " + sortedArray.join(", ");
});

sortDescendingButton.addEventListener("click", () => {
  const array = inputArray.value.split(",").map((name) => name.trim());
  const sortedArray = descendingSort(array);
  resultElement.innerHTML = "Result : Descending Sort: " + sortedArray.join(", ");
});

addButton.addEventListener("click", () => {
  const element = prompt("Enter the element to add:");
  const array = inputArray.value.split(",").map(name => name.trim());
  addElement(element, array);
  resultElement.innerHTML = "Result : Updated Array: " + array.join(", ");
  inputArray.value = array.join(", "); 
});

removeButton.addEventListener("click", () => {
  const element = prompt("Enter the element to remove:");
  let array = inputArray.value.split(",").map(name => name.trim());
  array = removeValue(array, element);
  if (array.length === inputArray.value.split(",").length) {
    resultElement.innerHTML = "Result : Element not found.";
  } else {
    resultElement.innerHTML ="Result : Updated Array: " + array.join(", ");
    inputArray.value = array.join(", ");
  }
});
