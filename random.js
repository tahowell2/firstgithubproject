/* Random number generator that compares itself with the user input */

var randomGenerator = Math.floor(Math.random() * 10) + 1;
var turns = 5;

while (turns > 0) {
  var user = prompt("Pick a number between one through ten");
  var userInput = parseInt(user);

  if(userInput === randomGenerator) {
    alert("You got it!");
    turns = 0;
  } else if (userInput > randomGenerator) {
    alert("Guess lower!");
    --turns;
  } else if (userInput < randomGenerator) {
    alert("Guess higher!");
    --turns;
  }
}

alert("The number was " + randomGenerator);
