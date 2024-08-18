// Number guessing game: User guesses a number and the program checks if it's correct

var prompt = require("prompt-sync")();

// Function to guess the number
function guess(guessedNumber) {
  // Generate a random number between 1 and 10
  var randomNumber = Math.floor(Math.random() * 10) + 1;
  
  // Check if the guessed number is correct
  if (guessedNumber == randomNumber) {
    console.log("Hurray!! Correct Guess");
  } else {
    console.log("Oops!! Guessed Wrong. Correct number: " + randomNumber);
  }
}

// Prompt user for their guess and call the guess function
var guessedNumber = prompt("Guess a number between 1 and 10: ");
guess(Number(guessedNumber));
