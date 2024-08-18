// Practiced functions, parameters, and the return keyword in JavaScript

// Exercise 1
function samsung() {
  console.log("Samsung Mobile");
}

function nokia() {
  console.log("Nokia Mobile");
}

function apple() {
  console.log("Apple Mobile");
}

nokia();
samsung();
apple();

// Exercise 2
var a = 10;
var b = 30;
function add() {
  console.log(a + b);
}

add();

// Exercise 3
var factor = "Vijay";
var fplayer = "Dhoni";
var fmovie = "Three";

function favo() {
  console.log("Favourite Actor " + factor);
  console.log("Favourite Player " + fplayer);
  console.log("Favourite Movie " + fmovie);
}

favo();

// Exercise 4
function rectangle(l, b) {
  console.log("Area of rectangle is " + l * b);
}

rectangle(10, 20);

// Exercise 5
var a = 10;
var b = 30;
function add() {
  var total = a + b;
  return total;
}

console.log("Total is " + add());

// Exercise 6
function findEvenOdd(num) {
  if (num == 0) {
    console.log("Zero");
  } else if (num % 2 == 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}

findEvenOdd(1);

// Exercise 7
function superpower(name) {
  var firstChar = name.charAt(0);
  if (firstChar == "S") {
    console.log("Yes!! I am a superhero");
  } else {
    console.log("No!! I am a Villain");
  }
}

superpower("Batman");
