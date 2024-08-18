// Practiced these tasks to understand conditional statements and logical operators in JavaScript

// Exercise 1
var isRaining = true;
if (isRaining) {
  console.log("Take an umbrella");
} else {
  console.log("Enjoy the sunshine");
}

// Exercise 2
var homework = false;
if (homework) {
  console.log("Yes, Done!!");
} else {
  console.log("Not Yet!!");
}

// Exercise 3
var cookiesLeft = true;
if (cookiesLeft) {
  console.log("Yes");
} else {
  console.log("No");
}

// Exercise 4
var brushTeeth = false;
if (brushTeeth) {
  console.log("Done!!");
} else {
  console.log("No, Lazy!!");
}

// Exercise 5
var isBirthday = false;
if (isBirthday) {
  console.log("Happy Birthday!!");
} else {
  console.log("Have a Great Day");
}

// Logical Operators Practice

// Exercise 1
var signal = "red";
if (signal == "red") {
  console.log("Stop");
}
if (signal == "yellow") {
  console.log("Wait");
}
if (signal == "green") {
  console.log("Go");
}

// Exercise 2
var season = "Spring";
if (season == "Summer") {
  console.log("Have fun in the Sun");
} else if (season == "Spring") {
  console.log("Enjoy the blooming flowers");
} else if (season == "Winter") {
  console.log("Bundle up and stay warm");
} else {
  console.log("Admire the letting go");
}

// Exercise 3
var score = 67;
if (score < 50) {
  console.log("Keep Going");
} else if (score >= 50 && score <= 75) {
  console.log("Super");
} else {
  console.log("Excellent");
}

// Exercise 4
var char = "b";
if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
  console.log("Vowel");
} else {
  console.log("Consonant");
}
