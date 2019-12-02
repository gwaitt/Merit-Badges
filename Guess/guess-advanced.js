/* George Guess Validator Game
 */
var games = 0;
var again = true;
var totalTurns = 0;
while (newGame==true);
{
answer = Math.floor(Math.random()*100)+1;
console.log(answer);
var guess = 0;
var turns = 0;
games++;
while (guess != answer) {
    guess=prompt("Guess my number between 1 and 100");
if (guess == "q") break;
if (validator(guess)==true){
turns++;
if (guess<answer) alert("No. You're too low.");
else if (guess>answer) alert("No. You're too high.");
}
if (validator(guess)==false) alert("Invalid input. Try again.");
}
if (guess == answer) gameStats();
else if (guess == answer) alert("Yes! You got it in "+turns+" turns.");
if (guess == answer) newGame();
else alert("quitter");
function validator(guess){
if (guess>=0 && guess<=100)return true;
else return false;
}
function newGame(again){
newGame = confirm("Would you like to play again?");
if (newGame == true) return true;
else alert("Thank you for playing!");
return false;
}
}
function gameStats(){
alert("you guessed it in "+turns+" turns!");
(totalTurns = totalTurns + turns);
(averageTurns = totalTurns/games);
alert("you won "+games+" games with an average of "+averageTurns+" turns per game!");
}
