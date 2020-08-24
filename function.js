"use strict";
// Function
//  - fundamental building block in the program
//  - subprogram can be usd multiple times
//  - perform a task or calculates a value

//1. Function declaration
//    - function name(param1, param2) { body ... return; }
//    - one function == one thing
//    - naming: doSomething, command, verb
//    - e.g createCardAndPoint → createCard createPoint
//    - function is object in JS

function printHello() {
  console.log("Hello");
}
printHello();

function log(message) {
  console.log(message);
}
log("Hello!");
log(1234);

// 2. Parameters
// - premitive parameters: passd by value
// - object parameters: passd by reference
function changeName(obj) {
  obj.name = "coder";
}
const ellie = { name: "ellie" };
changeName(ellie);
console.log(ellie);

//3. Default parameters (added in ES6)
function showMessage(message, from) {
  console.log(`${message} by ${from}`);
}
showMessage("Hi!");

function showMessage2(message, from) {
  if (from === undefined) {
    from = "unknown";
  }
  console.log(`${message} by ${from}`);
}
showMessage2("Hi!");

function showMessage3(message, from = "unknown") {
  console.log(`${message} by ${from}`);
}
showMessage3("Hi!");
