/* George Guess Game: Random Integer-Driven JavaScript While Loop
 * Format: while (boolean expression) {} -- indent block code 
 */

// Declare var answer as random integer between 1 and 100.
answer = Math.floor(Math.random()*100)+1;
// alert the answer while testing.
alert("The answer is "+answer+"");
// Declare var guess, set to 0.
var guess = 0;
// Define while loop that runs while guess is not equal to answer
  while (guess != answer) {
  	// Prompt user for guess.
    guess=prompt("What number between 1 and 100 am I thinking of?");
  	/* Add conditionals that give feedback on values:  if / else if */
  	// If guess less than answer, say too low. 
  if (guess<answer) alert("No. You're too low.");
  	// If guess more than answer, say too high. 
  else if (guess>answer) alert("No. You're too high.");
  // Close While Loop Brackets
}
// Alert that they got it. 
if (guess == answer) alert("Yes! the answer is "+answer+"");