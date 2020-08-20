// Whole-script strict mode syntax
// JavaScript is very flexible
// flexible === dangerous
// added ECMAScript 5

// 1. Use strict
// added in ES 5
// use this for Valina Javascript.
'use strict';

// 2. Variable, rw(read/write)
// let (added in ES6)

let name = 'ellie';
console.log(name);
name = 'hello';
console.log(name);


// 2-1. Block scope
// { } 안에 적으면 지역변수. 내부에서만 사용됨
// { } 밖에 적는 것은 글로벌변수.
// 글로벌한 변수들은 어플리케이션이 실행된 순간부터 끝날 때까지 항상 메모리를 탑재되어있기 때문에 최소한으로 사용하는게 좋고
// 가능하면 클래스나 함수(if or for look)으로 필요한 순가에만 사용하는 게 좋다.
let globalName = 'global name';
{ 
  let name2 = 'ellie';
console.log(name2);
name2 = 'hello';
console.log(name2);
}

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// has no block scope
console.log(age);
age = 4;
var age;

// 3. Constant, r(read only)
// use const whenever possible.
// only use let if variable needs to change.
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

//Note!
//Immutable data types: primitive types, frozen objects (i.e. object.freeze())
//Mutable data types: all objects by default are mutable in JS

// 4. Variable types
// primitive, single item : number, string, boolean, null, undefined, symble
// object, box container
// function, first-class function

//4-1. number
const count = 17; //integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - speical numeric values: infinity, -infinity, NaN
const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn = 'not a number'/2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//bigInt (fairly new, don't use it yet)
const bigInt = 123456789012345678901234567890n; //over (-2**53 ~ 2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

// 4-2. string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);


// 4-3. boolean
// false: 0, null. undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 <1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null 
let noting = null;
console.log(`value: ${noting}, type: ${typeof noting}`);

//undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
// 스트링, 타입이 똑같은 변수를 만들고 싶다면? for('string')으로 작성. 동일하다고 출력됨.
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);
// symbol 값 출력시 에러가 남. 뒤에 .description을 작성해서 string으로 변경해 출력.
console.log( `value: ${symbol1.description}, type: ${typeof symbol1}`);

//object, real-life object, data structure
//const로 선언되어 ellie는 변경이 불가지만 ellie.age, ellie.name은 변경 가능
const ellie = {name: 'ellie', age: 20};
console.log (ellie.age);
ellie.age = 21;
console.log (ellie.age);

//5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0)); // h 출력됨<-string으로 이해하기때문에 0임.
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5; 
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0)); //<-중간에 데이터타입이 number로 변경되어서 배열이 출력안됨
