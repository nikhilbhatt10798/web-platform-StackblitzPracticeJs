// Operation in Ojects

// let employee = {
//   empId: 10,
// };

// primitive data type : - > copy by value
// non primitive data type : - >  copy by refrence

// operation on object is done by using concept of
// copy by reference
// now question is what is copy by reference
// copy by reference ka matlb hai jese upper emmployee variable  mai object store nahi hota hai balki usne us object ka memory reference (memory address)store hota hai

// now ,

// const newObject = employee;

// console.log(employee == newObject);
//result is true because both have same momory address of object

// this is known as copying refrences
// ================================================

// now copying object or cloning object

// method to do so

// object.assign();
// using for loop
// spreead operator

//what is  shallow copying and deep copying
// =========================================

// what is new key word ?
// ans : = >
//firest create constructor function
// function Employee(empId, empName) {
//   this.empId = empId;
//   this.empName = empName;
// }
// const employee1 = new Employee(1, 'nikhil');
// const employee2 = new Employee(10, 'sachin');

// console.log(employee1);

// what is factory function ?

// function emp(empId, empName) {
//   return {
//     empId,
//     empName,
//   };
// }

// const emply = emp(101, 'nikhil');
// console.log(emply);
