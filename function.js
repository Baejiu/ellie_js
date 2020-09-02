'use strict';
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
  console.log('Hello');
}
printHello();

function log(message) {
  console.log(message);
}
log('Hello!');
log(1234);

// 2. Parameters
// - premitive parameters: passd by value
// - object parameters: passd by reference
function changeName(obj) {
  obj.name = 'coder';
}
const ellie = { name: 'ellie' };
changeName(ellie);
console.log(ellie);

//3. Default parameters (added in ES6)
function showMessage(message, from) {
  console.log(`${message} by ${from}`);
}
showMessage('Hi!');

function showMessage2(message, from) {
  if (from === undefined) {
    from = 'unknown';
  }
  console.log(`${message} by ${from}`);
}
showMessage2('Hi!');

function showMessage3(message, from = 'unknown') {
  console.log(`${message} by ${from}`);
}
showMessage3('Hi!');

//4. Rest parameters (added in ES6)
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');

//5. Local scope
let globalMessage = 'global'; //global variable
function printMessage() {
  let message = 'hello';
  console.log(message); //local variable
  console.log(globalMessage);
  function printAnother() {
    console.log(message);
    let childMessage = 'hello';
  }
  // console.log(childMessage); 볼수없음
}
printMessage();

//6. Return a value;
// 모든 함수에는 Return이 들어가 있다.
// 없는 함수에는 Return undefined이 생략되어있는 것!
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2);
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user) {
  if (user.point > 10) {
    //long upgrade logic...
  }
}

//good
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  // long upgrade logic...
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

//1. Function expression
// a function declaration can be called earlier than it is defiend. (hoisted)
// a function expression is created when the execution reaches it.

const print = function () {
  //anonymous function = 이름없는 함수
  console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

//2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if (answer === 'love you') {
    printYes();
  } else {
    printNo();
  }
}

// anonymous function
const printYes = function () {
  console.log('yes!');
};
// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
  console.log('no!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

//Arrow function
// always anonymous
const simplePrint = function () {
  console.log('simplePrint!');
};

const simplePrint2 = () => console.log('simplePrint!');

const add = function (a, b) {
  return a + b;
};

const add2 = (a, b) => a + b;

// IIFE : Immediately Invoked Function Expression
// 함수를 바로 호출하는 ();
(function hello() {
  console.log('IIFE');
});

//Fun quiz time(지우)
function calculate(command, a, b) {
  switch (command) {
    case 'add':
      console.log(a + b);
      break;
    case 'substract':
      console.log(a - b);
      break;
    case 'divide':
      console.log(a / b);
      break;
    case 'multiply':
      console.log(a * b);
      break;
    case 'remainder':
      console.log(a % b);
    default:
      console.log('?');
      break;
  }
}
calculate('add', 8, 2);

//Fun quiz time(엘리)
function calculate(command, a, b) {
  switch (command) {
    case 'add':
      return a + b;
    case 'substract':
      return a - b;
    case 'divide':
      return a / b;
    case 'multiply':
      return a * b;
    case 'remainder':
      return a % b;
    default:
      throw Error('unkonwn command');
  }
}
