/* George Guess Validator Game
 */

answer = Math.floor(Math.random()*100)+1;
console.log(answer);
var guess = 0;
var turns = 0;
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
if (guess == answer) alert("Yes! You got it in "+turns+" turns.");
else alert("quitter");
function validator(guess){
	if (guess>=0 && guess<=100)return true;
	else return false;
}