
// Q1. make a string out of an array
{
  //문제를 잘못이해하고 코드를 고쳤어요...
  const fruits = ['apple', 'banana', 'orange'];
  console.log(fruits);
}

// Q2. make an array out of a string
{
  //문제를 잘못이해하고 코드를 고쳤어요...
  const fruits = ['🍎','🥝','🍌','🍒'];
  console.log(fruits);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  array.reverse();
  console.log(array);
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const newArray = array.slice(2,array.length);
  console.log(newArray);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  console.log(students);
  console.log(students[1]);
  console.log(students[1].score);
  const filter = students[1].score > 90;
  console.log(filter);

  for (let i = 0; i < students.length; i++) {
    console.log(students[i].score);
}

students.forEach((student) => {
  if (student.score == 90) {
    console.log(student);
  }
});
}

// Q6. make an array of enrolled students
{
  //문제를 잘못 이해하고 배열에 각자 등록하는 줄 알았어요..
  console.log(students[0]);
  const student1 = {};
  Object.assign(student1, students[0]);
  console.log(student1);
  for (let i = 0; i < students.length; i++) {
    const makestudent = {};
    Object.assign(makestudent, students[i]);
    console.log(makestudent);
  }
  

}


// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const makeScore = new Array();
  for (let i = 0; i < students.length; i++) {
    const score = students[i].score;
    makeScore.push(score);
  }
  console.log(makeScore);
}

// Q8. check if there is a student with the score lower than 50
{

  for (let i = 0; i < students.length; i++) {
    const score = students[i].score;
    const result = score >= 50 ;
    if (result == false) {
      console.log(students[i]);
    } 
  }

  const Score = new Array();
  for (let i = 0; i < students.length; i++) {
    const number = students[i].score;
    Score.push(number);
  }
  const even = (element) => element <= 50 === true;
  console.log(Score.some(even));

}

// Q9. compute students' average score
{
  const Score = new Array();
  for (let i = 0; i < students.length; i++) {
    const number = students[i].score;
    Score.push(number);
  }
  //MDN...
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  console.log(Score.reduce(reducer)/students.length);

}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{ 
  const textScore = new Array;
  for (let i = 0; i < students.length; i++) {
  const number = students[i].score;
  textScore.push(number);
}
console.log(textScore.join());

}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const score = new Array;
  for (let i = 0; i < students.length; i++) {
    const number = students[i].score;
    score.push(number);
  }
  console.log(score);
  score.sort();
  console.log(score);

}