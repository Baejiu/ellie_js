'use strict';


// 1. String concatenation
console.log('my' + 'cat'); // 문자 + 문자
console.log('1' + 2); // 문자와 숫자를 결합하면 숫자를 문자로 변화해서 출력
console.log(`string literals: 1 + 2 = ${1+2}`); // 빽팁으로 문자+ 달러사인으로 변수값을 계산해서 표현됨

// 빽팁의 장점! 
// - 공백, 줄바꿈, ''''' 문자 가능 

console.log('ellie\'s \n\tbook'); //''안에 ' 사용시 \' 작성해줘야 함 , 줄바꿈 \n , 탭키 \t


// 2. Numeric operators
console.log(1 + 1); //add
console.log(1 - 1); //substract
console.log(1 / 1); //divide
console.log(1 * 1); //multiply
console.log(5 % 2); //remainder
console.log(2 ** 3); //exponentiation


// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter; //앞에 ++
//counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++; //뒤에 ++
//postIncrement = counter;
//counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

//-- 도 출력값 동일
const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);


// 4. Assignment operators
let x = 3;
let y = 6;
console.log(x += y); //x = x + y;
console.log(x -= y); //x = x - y;
console.log(x *= y); //x = x * y;
console.log(x /= y); //x = x / y;


//5. Comparison operators
console.log(10 < 6); //less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10>= 6); // greater than or equal


// 6. Logical operators : || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or), finds the first trythy value
console.log(`or : ${value1 || value2 || check()}`);
// or은 true가 나오면 끝. 심플한 연산을 앞에 두고, 연산을 많이 하는건 뒤로 배치하는게 효율적! (코드지적방지)

// && (and), finds the first falsy value
console.log(`and : ${value1 && value2 && check()}`);
// and는 false가 나오면 끝. 헤비한 연산을 뒤로! 

// often used to compress long if-statement
// nullableObject && nullableObject.something
// if (nullableObject != null) {
//  nullableObject.something;
// }

function check() {
  for (let i = 0; i < 10; i++) {
    //wasting time
    console.log('😱');
  }
  return true;
}


// ! (not) - 값을 반대로 바꿔줌
console.log(!value1); 

 // 7. Equality
 const stringFive = '5';
 const numberFive = 5;

 // == loose equality, with type conversion
 console.log(stringFive == numberFive);
 console.log(stringFive != numberFive);

 // === strict equality, no type conversion
 console.log(stringFive === numberFive);
 console.log(stringFive !== numberFive);

  // object equality by reference
  const ellie1 = { name: 'ellie' };
  const ellie2 = { name: 'ellie' };
  const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);

 // equality - puzzler
 console.log(0 == false);
 console.log(0 === false);
 console.log('' == false);
 console.log('' === false);
 console.log(null == undefined);
 console.log(null === undefined);

  // 8. Conditional operators: if
  // if, else if, else
  const name = 'ellie';
  if (name==='ellie') {
    console.log('Welcome, Ellie!');
  } else if(name === 'coder') {
    console.log('You are amazing coder');
  } else {
    console.log('unkwnon');
  }

   //9. Ternary operator: ?
   //( condition ? value1 : value2 );
   console.log(name === 'ellie' ? 'yes' : 'no' );

    //10. Switch statement
    // use for multiple if checks
    // use for enum-like value check
    // use for multiple type checks in TS
    const browser = 'Chrome';
    switch (browser) {
      case 'IE':
        console.log('go away!');
        break;
      case 'Chrome':
        console.log('love you!');
        break;
      case 'Firefox':
        console.log('love you!');
        break;
      default:
        console.log('same all!');
        break;
    }
    //case 결과값이 중복일 시 연달아 붙혀놓으면 됨
    switch (browser) {
      case 'IE':
        console.log('go away!');
        break;
      case 'Chrome':
      case 'Firefox':
        console.log('love you!');
        break;
      default:
        console.log('same all!');
        break;
    }

    //11. Loops
    // while loop, while the condition is truthy,
    // body code is executed.
    let i = 3;
    while (i>0) {
      console.log(`while: ${i}`);
      i--;
    }

    //do while loop, body code is executed first,
    // then check the condition.
    do {
      console.log(`do while: ${i}`);
      i--;
    } while (i>0);

    //for loop, for(begin; condition; step)
    for (i=3; i>0; i--) {
      console.log(`for: ${i}`);
    }

    for (let i = 3; i > 0; i = i - 2 ) {
      // inline variable declaration
      console.log(`inline variable for: ${i}`);
    }

    //nested loops
for (let i = 0; i < 10; i++) {
  for (let j=0; j<10; j++){
    console.log(`i: ${i}, j: ${j}`);
  }
}

//Q1
for (let a = 0; a < 11; a++) {
  if (a % 2 === 0) {
    console.log(a);
  }
}

for (let b = 0; b < 10; b++) {
  if (b > 8) {
    break;
  }
  console.log(b);
  
}
