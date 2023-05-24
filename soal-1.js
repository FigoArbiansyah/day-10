const newWords1 = (words) => {
  const splitWords = words.split(" ").map((word) => {
    return word.split("").join("@");
  });
  return splitWords.join(" ");
};

console.log(newWords1("Hello World"));

// // CARA 2
// const newWords2 = (words) => {
//   const transform = words.split("").join("@");
//   return transform;
// };

// // Result H@e@l@l@o@ @W@o@r@l@d
// console.log(newWords2("Hello World"));

// // CARA 2
// const newWords3 = (words) => {
//   const splitWords = words.split("");
//   let joinWords = [];
//   const transform = splitWords.map((word, index) => {
//     if (words[index] == " " || words[index] == words[words.length - 1]) {
//       return word + "";
//     } else {
//       return word + "@";
//     }
//   });
//   return transform.join("");
// };

// // Result H@e@l@l@o@ W@o@r@l@d
// console.log(newWords3("Hello World"));
