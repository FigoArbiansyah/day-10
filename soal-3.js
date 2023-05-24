const newNumber = (numbers) => {
  let number = [];
  for (let i = 0; i < numbers.length; i++) {
    if (i != 0) {
      number.push((numbers[i] += numbers[i - 1]));
    }
  }
  number.unshift(numbers[0]);
  return number;
};

let numbers = [1, 2, 3, 4, 5];
console.log(newNumber(numbers));
