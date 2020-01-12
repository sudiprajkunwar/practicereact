//variable(which hold value) declaration
//let const var

//var => functional scope

// function hello() {
//   for (var i = 0; i < 5; i++) {
//     console.log(i);
//   }
//   console.log(i);
// }
// hello();

//let => block scope

// function hello() {
//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//   }
// }
// hello();

// const =>constant where we have to put some value always

// const person = {
//   name: "sudip",
//   age: 23,
//   isHero: true
// };
// console.log(person);

// higher order array
let client = [
  { id: 1, name: "hari", age: 2 },
  { id: 2, name: "shyam", age: 99 },
  { id: 3, name: "ram", age: 8 }
];

// for each method
// for (let i = 0; i < client.length; i++) {
//   console.log(client[i]);
// }

// client.forEach(function(user, index, allUser) {
//   console.log(user);
//   console.log(index);
//   console.log(allUser);
// });
// console.log(client);

// map in js
// callback function => is the function which is passed in parameter which we can call anytime

// let userProfile = client.map(function(user, userIndex, allUser) {
//   return allUser;
// });
// console.log(userProfile);

// filter in js
// let filterData = client.filter(function(data, datas) {
//   return data.id !== 2;
//   OR  return data.name === "hari";
// return datas.id !== 1;
// });
// console.log(filterData);

// spread operator
// let arr1 = [1, 2, 3];
// let arr2 = [...arr1, 4, 5];
// console.log(arr2);

// let male = { name: "srk", age: 20 };
// let male1 = {
//   job: "programmer",
//   ...male
// };
// console.log(male1);

// destructuring in js

const people = {
  name: "hari",
  hobbies: ["coding", "movies"],
  address: {
    street: "ktm",
    city: "pokhara"
  }
};
// console.log(people.address.city);
// console.log(people.hobbies[0]);
// OR;
// const { street, city } = people.address;
// (destructoring)
// console.log(city);

// classes in js
class Employee {
  constructor(name, exp, age) {
    this.name = name;
    this.exp = exp;
    this.age = age;
  }
}

sudip = new Employee("srk", 5, 21);
console.log(sudip.age);

class job extends Employee {
  constructor(name, exp, age, lang) {
    super(name, exp, age);
    this.lang = lang;
  }
}

dinesh = new job("dine", 5, 70, "eng");
console.log(dinesh);
