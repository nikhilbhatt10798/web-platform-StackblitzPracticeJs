// filter
// map
// first class function
// transform

// const num = [1, 2, 3, 4, 5, 6, 7];
// function test(ele) {
//   if(ele > 5 ){
//     return ele;
//   }
//   // console.log(ele);
//   // console.log('hello World');
// }
// // let greate5 = num.filter(test);or
// // let greate5 = num.filter((ele)=>{
// //   if(ele >= 5 ){
// //     return ele;
// //   }
// // })
// let greate5 = num.filter((ele)=> ele >= 5 )
// console.log(greate5);

// const student = [
//   { firstName: 'akash', marks: 100 },
//   { firstName: 'nikhil', marks: 65 },
//   { firstName: 'prajesh', marks: 70 },
//   { firstName: 'shreyash', marks: 100 },
// ];

// function condition(ele) {
//   return ele.marks < 70;
// }

// const filterData = student.filter(condition);
// console.log(filterData);

// map () =====================

// first class function are those who accept function and argument

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function test (el){
//   return el * 2
// }
// const newMember = num.map(test);

// console.log(newMember);

const newMember = num.map((el) => el * 2);
console.log(num);
console.log(newMember);
