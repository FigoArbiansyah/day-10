const newArray = (bio) => {
  const newBio = bio.sort((a, b) => (a.name > b.name ? 1 : -1));
  let result = [];
  for (let i = 0; i < newBio.length; i++) {
    if (i === 0 || newBio[i].name !== newBio[i - 1].name) {
      result.push(newBio[i]);
    }
  }
  return result;
};

let bio = [
  { name: "John", age: 35 },
  { name: "Jane", age: 30 },
  { name: "John", age: 25 },
  { name: "Alice", age: 28 },
];

console.log(newArray(bio));
