let names = ["Alex", "Anna", "Mia", "Joe"];

function getRandomName() {
  const randomIndex = Math.floor(Math.random() * names.length);

  const randomName = names[randomIndex];

  return randomName;
}

const result = getRandomName();
console.log(result);

function alphabeticSort(names) {
  const sortedWords = names.sort();
  console.log(sortedWords);
}
alphabeticSort(names);
function descendingSort(names) {
  const sortedWords = names.sort();
  const descending = sortedWords.reverse();
  console.log(descending);
}
descendingSort(names);

function addElement(element) {
  names.push(element);
  console.log(names);
}
addElement("Rose");

function removeValue(names, value) {
  const index = names.indexOf(value);
  if (index !== -1) {
    names.splice(index, 1);
  }
  return names;
}

console.log(removeValue(names, "Mia"));
