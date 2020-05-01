// John and Mike both play basketball in different teams. In the latest 3 games, 
// John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

// 1. Calculate the average score for each team
// 2. Decide which teams wins in average (highest average score), and print the winner to the console. 
// Also include the average score in the output.
// 3. Then change the scores to show different winners. Don't forget to take into account 
// there might be a draw (the same average score)

// 4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, 
// log the average winner to the console. HINT: you will need the && operator to take the decision. 
// If you can't solve this one, just watch the solution, it's no problem :)
// 5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

// calculate score
var scoreTeamA = (115 + 119 + 125) / 3;
var scoreTeamB = (116 + 119 + 125) / 3;
var scoreTeamC = (115 + 119 + 115) / 3;

console.log("Team A " + scoreTeamA)
console.log("Team B " + scoreTeamB)
console.log("Team C " + scoreTeamC)

// compare average points
if ((scoreTeamC > scoreTeamB) && (scoreTeamC > scoreTeamA)) {
    console.log("Mary's team is the winner it's got " + scoreTeamC + " points");
} else if ((scoreTeamB > scoreTeamA) && (scoreTeamB > scoreTeamC)) {
    console.log("Mike's team is the winner it's got " + scoreTeamB + " points");
} else if ((scoreTeamA > scoreTeamB) && (scoreTeamA > scoreTeamC)) {
    console.log("John's team is the winner it's got " + scoreTeamA + " points");
} else {
    console.log("We've got the draw, John's team has " + scoreTeamA 
    + " points, so do Mike's team " + scoreTeamB + " and Mary's team also " + scoreTeamC);
}
