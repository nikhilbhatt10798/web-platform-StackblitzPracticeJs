// =========== sorting in Array ==========================
// array of string
// sort () use to sort array of string
// const str = ['rahul', 'nikhil', 'aman', 'shreyash', 'shristi'];

// console.log(str.sort());

//==== array of number ============

// const num = [23,33,2,12,6,55];
// let numSort= num.sort(); not work
// console.log(numSort);

// const num = [23, 33, 2, 12, 6, 55];
// let numSort= num.sort();
// console.log(numSort);

// for asending order
// function compare(a, b) {
//   // console.log(a, b);
//   if (a > b) return 1;
//   if (b > a) return -1;
//   return 0;
// }

// for decending order
// function compare(a, b) {
//   // console.log(a, b);
//   if (a > b) return -1;
//   if (b > a) return 1;
//   return 0;
// }
// console.log(num.sort(compare));
// or
// num.sort((a, b) => a - b); //assending only work for array of number
// num.sort((a, b) => b - a) //desending only work for array of number
// console.log(num);

// Array Of object
// const student = [
//   {
//     name: 'nikhil',
//     age: 25,
//   },
//   {
//     name: 'rahul',
//     age: 22,
//   },
//   {
//     name: 'ankit',
//     age: 28,
//   },
// ];

// function compare(a, b) {
//   if (a.name > b.name) return 1;
//   if (b.name > a.name) return -1;
//   return 0;
// }

// student.sort(compare);
// console.log(student);
