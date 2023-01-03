// // array Push

// let fruits = ['apple', 'mango', 'grapes'];

// console.log(fruits);
// // push
// fruits.push('banana');
// console.log(fruits);
// // pop
// let popFruite = fruits.pop();
// console.log(fruits);

// // push and pop are faster than shift and unshift

// primitive vs reference Type

//refrence type

// let arr1 = [1, 2, 3];
// let arr2 = arr1;
// console.log('arr1', arr1);
// console.log('arr2', arr2);

// // how to clone array : ===================
// // 1: using slice(0) function
// // 2: using [],concat(array1)
// // 3: sprade operator [...array1]

// let array1 = ['item1','item2']
// console.log('array1',array1)
// // clone array 1: using slice(0) function
// let array2 = array1.slice(0)
// // clone array 2: using [],concat(array1)
// let array2 = [].concat(array1);
// // clone array 3: sprade operator [...array1]
// let array2 = [...array1,'item3']
// console.log('array2',array2)

// // how to concatenate two array

// let array1 = ['item1','item2']
// let array2 = [...array1,'item3']
// console.log('array2',array2)

// iterate
const fruits = ['apples', 'mangos', 'banana', 'pineapple'];

// method for iteration
// 1: for loop
// 2: forEach
// 3: for of loop**

// function test(ele,i){
//   console.log(`${i}:${ele}`)
// }
// fruits.forEach(test)

for (let ele of fruits) {
  console.log(ele);
}
