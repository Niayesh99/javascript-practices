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
function descendingSort(names){
    const sortedWords = names.sort();
    const descending =sortedWords.reverse();
    console.log(descending); 
}
descendingSort(names);

