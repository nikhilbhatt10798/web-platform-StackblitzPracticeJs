// Object : Object are reference type
// arrays are good bt not sufficient for real world Data
// objects store key value pair
// objects don't have index

// how to create object

// const person = {
//   name: "nikhil",
//   age : 25,
//   hobbies : ['watching sport','coding','playing cricket'],
// };
// console.log(typeof person);

// // how to access object

// console.log(person.age)
// console.log(person.name)
// console.log(person.hobbies)

// // how to add key value pair to object
// person.gender="male";
// console.log(person.gender);
// console.log(person['gender'])

// // diffrence between dot and braket notation
// const key = "email";
// const person = {
//   name: "nikhil",
//   age : 25,
//   'person hobbies' : ['watching sport','coding','playing cricket'],
// };
// // console.log(person['person hobbies']);

// person[key]="nikhilbhatt@gmail.com";
// console.log(person);

// how to iterate object

const person = {
  name: 'nikhil',
  age: 25,
  'person hobbies': ['watching sport', 'coding', 'playing cricket'],
};
// for in loop

// for (let key in person) {
  // console.log(person[key]);
  // console.log(`${key} : ${person[key]}`)
// }

// console.log( Object.keys(person));
// let val =Array.isArray( Object.keys(person))
// console.log(val);

// using for in loop

// for (let key in person){
//   console.log(person[key]);
// }

// computed properties

const key1 = "object1";
const key2 = "object2";