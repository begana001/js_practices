// make an array of kicker teams
const teams = ["hello world", "bananas", "le gang", "pandas", "new team"];

// shuffle array item
function shuffleArray(array) {
  return array.sort(() => 0.5 - Math.random());
}

const suffledArray = shuffleArray(teams);
console.log(suffledArray);

console.log([1, 2, 3, 4].sort(() => 0.5 - 0.33));

// create new empty kicker match array
// slice suffled array into 2 arrays and push them to kicker match array

// iterate over kicker match array and print them by each matches
