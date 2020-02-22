"use strict";

let personsName;

// box copy input and output and change to uppercase
let domTextBit = document.getElementById("putItIn").addEventListener("input", function() {
  let inputOutput = document.getElementById("putItIn").value;
  inputOutput = inputOutput.toUpperCase();
  document.getElementById("texty").placeholder = inputOutput;
});

console.log(domTextBit);

// capitalize name function
function capitalizeName(personsName) {
  return personsName.toUpperCase();
}
// console.log(capitalizeName("geoff"));

// takes content from H1 and capitalizes it
function capitalizeContent() {
  const grabbingFromDom = document.querySelector("h1").textContent;
  return grabbingFromDom.toUpperCase();
}
// console.log(capitalizeContent());

// object tests
let managerObj = {
  name: "Graeme",
  title: "Mr",
  height: 5
};

let fruitObj = {
  name: "apple",
  color: "green"
};

// console.log(managerObj.title);

function sayHi() {
  console.log("Hello, my name is", this.name);
}

managerObj.sayHi = sayHi;
managerObj.sayHi();

console.log(fruitObj.name);
