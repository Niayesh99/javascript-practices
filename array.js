let names = ["Alex", "Anna", "Mia", "Joe"];

function getRandomName() {
  const randomIndex = Math.floor(Math.random() * names.length);

  const randomName = names[randomIndex];

  return randomName;
}

const result = getRandomName();
console.log(result);

