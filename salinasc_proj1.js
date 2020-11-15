var letsplayRounds = parseInt(prompt("How many rounds?"));

var someUser = 0;

var compUser = 0;
var userWins = 0;

var compWins = 0;

var draw = 0;

var r = 0;
var p = 1;
var s = 2;

for(var i = 1 ; i <= letsplayRounds; i++) {

	compUser = Math.floor(Math.random() * 3);
	someUser = prompt("choose r, p, or s");

	if (someUser === "p" && compUser === p) {
		alert("Draw");
		draw++;
	} else if (someUser === "r" && compUser === r) {
		alert("Draw");
		draw++;
	} else if (someUser === "s" && compUser === s) {
		alert("Draw");
		draw++;
	} else if (compUser === r && someUser === "s") {
		alert("Computer Wins");
		compWins++;
	} else if (compUser  === s && someUser === "p") {
		alert("Computer Wins");
		compWins++;
	} else if (compUser === p && someUser === "r") {
		alert("Computer Wins");
		compWins++;
	} else if (someUser  === "s" && compUser === p) {
		alert("You Win");
		userWins++;
	} else if (someUser === "p" && compUser === r) {
		alert("You Win");
		userWins++;
	} else if (someUser === "r" && compUser === s) {
		alert("You Win");
		userWins++;
	}
}


alert("The computer won: " + compWins + " times, you drew: " + draw +" User: "+userWins);