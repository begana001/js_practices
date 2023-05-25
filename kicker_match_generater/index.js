// make an array of kicker teams
const teams = ["hello world", "bananas", "le gang", "pandas", "new team"];
teams.sort();
const chunkSize = 2;
const arraySliced = [];
const kicker_match = {};
const teamLength = teams.length;

// team up by 2 teams
splitTeams(teams, chunkSize);

function splitTeams(arr, chunkSize) {
  for (let i = 0; i < teams.length; i += chunkSize) {
    // 1. split by 2 teams
    let chunk = arr.slice(i, i + chunkSize);
    // 2. push it to the empty array
    arraySliced.push(chunk);
  }
}
console.log(arraySliced);

// push sliced array to the hash
function pushTeam(array) {
  for (let i = 0; i < array.length; i++) {
    kicker_match[`match ${i + 1}`] = array[i];
  }
}

pushTeam(arraySliced);
// print the match list
console.log(kicker_match);
