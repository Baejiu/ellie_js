'use strict';

//JSON
<<<<<<< HEAD
//JavaScript Object Notation

//1. Object to JSON
//stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${name} can jump!`);
    },
};

json = JSON.stringify(rabbit);
console.log(json)

json = JSON.stringify(rabbit,["name", "color", "size"]);
console.log(json)

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'ellie' : value;
});
console.log(json)

//2. JSON to Object
//parse(json)
console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`)
    return key === 'birthDate' ? new Date(value) : value;
=======
// JavaScript Object Notation

// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple','banana']);
console.log(json);

const rabbit = {
  name: 'tori',
  color: 'white', 
  size: null,
  birthDate: new Date(),
  jump: () => {
    console.log(`${name} can jump!`);
  }
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ["name", "color"]);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'name' ? 'ellie' : value;
});
console.log(json);

// 2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'birthDate' ? new Date(value) : value;
>>>>>>> 74271ce5326a2e93384f1a589886f49fe957bff0
});
console.log(obj);
rabbit.jump();
//obj.jump();

<<<<<<< HEAD
console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());
=======
rabbit.birthDate.getDate();
console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());

>>>>>>> 74271ce5326a2e93384f1a589886f49fe957bff0
