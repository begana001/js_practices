// make an array of kicker teams
const teams = ["hello world", "bananas", "le gang", "pandas", "new team"];

// shuffle array item
function shuffleArray(array) {
  return array.sort(() => 0.5 - Math.random());
}

console.log(shuffleArray(teams));

console.log([1, 2, 3, 4].sort(() => 0.5 - 0.33));
