// make an array of kicker teams
const teams = ["hello world", "bananas", "le gang", "pandas", "new team"];
teams.sort();
const chunkSize = 2;
const kicker_match = {};

// team up by 2 teams
splitTeams(teams, chunkSize);

function splitTeams(arr, chunkSize) {
  for (let i = 0; i < teams.length; i += chunkSize) {
    // 1. split by 2 teams
    let chunk = arr.slice(i, i + chunkSize);
    // 2. push it to the kicker_match hash
    kicker_match[`match ${i - 1}`] = chunk;
  }
}

// print the match list
console.log(kicker_match);
