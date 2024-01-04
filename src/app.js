// Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

function createManager(managerName, managerAge, currentTeam, trophiesWon) {
  return [managerName, managerAge, currentTeam, trophiesWon];
}

try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

// Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

function createFormation(formation) {
  if (formation.length === 0) {
    return null;
  }

  return {
    defender: formation[0],
    midfield: formation[1],
    forward: formation[2]
  };
}

try {
  var formationObject = createFormation(formation);
} catch (e) {
  // do nothing
}

// Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year) {
  return players.filter(player => player.debut == year);
}

// Progression 4 - Filter players that play at the position _______
function filterByPosition(position) {
  return players.filter(player => player.position == position);
}

// Progression 5 - Filter players that have won ______ award
function filterByAward(award) {
  let result = [];
  players.forEach((player) => {
    let awardArray = player.awards;
    awardArray.forEach((awardReceived) => {
      if (awardReceived.name == award) {
        result.push(player);
      }
    });
  });
  return result;
}

// Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(award, times) {
  let winners = players.filter((p) => {
    let count = 0;
    for (let x = 0; x < p.awards.length; x++) {
      if (p.awards[x].name === award) {
        count++;
      }
    }
    return count == times;
  });
  return winners;
}

// Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName, country) {
  let result = [];
  players.forEach((player) => {
    let awardArray = player.awards;
    awardArray.forEach((awardReceived) => {
      if (awardReceived.name == awardName && player.country == country) {
        result.push(player);
      }
    });
  });
  return result;
}

// Progression 8 - Filter players that won at least ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age) {
  let result = [];
  players.forEach((player) => {
    if (player.awards.length >= noOfAwards && player.team == team && player.age < age) {
      result.push(player);
    }
  });
  return result;
}

// Progression 9 - Sort players in descending order of their age
function sortByAge(players) {
  return players.sort((a, b) => b.age - a.age);
}

// Progression 10 - Sort players belonging to _____ team in descending order of awards won
function filterByTeamxSortByNoOfAwards(players, team) {
  return players
    .filter(player => player.team === team)
    .sort((a, b) => b.awards.length - a.awards.length);
}

// Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
function sortByNamexAwardxTimes(players, awardName, noOfTimes, country) {
  return players
    .filter(player =>
      player.awards &&
      player.awards.filter(award => award.name === awardName).length === noOfTimes &&
      player.country === country
    )
    .sort((a, b) => a.name.localeCompare(b.name));
}

// Challenge 2 - Sort players that are older than _____ years in alphabetical order
// Sort the awards won by them in reverse chronological order
function sortByNamexOlderThan(players, age) {
  return players
    .filter(player => player.age > age)
    .sort((a, b) => {
      const nameComparison = a.name.localeCompare(b.name);

      if (nameComparison === 0) {
        return b.awards[0].year - a.awards[0].year;
      }

      return nameComparison;
    });
}
