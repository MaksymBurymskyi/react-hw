"use strict";

//завдання 1

let usersNames = ["Mike", "Bob", "Nikola"];
let users = {};

[users.mike, users.bob, users.nikola] = usersNames;

console.log(users); // { mike: 'Mike', bob: 'Bob', nikola: 'Nikola' }

//завдання 2

let salaries = {
  Mike: 1500,
  Bob: 1800,
  Nicola: 1700,
};

function manWithMaxSalaries(salaryObj) {
  const salaryArr = Object.entries(salaryObj);
  let [luckyMan, maxSalary] = salaryArr[0];
  salaryArr.forEach((element) => {
    let [name, salary] = element;
    if (salary > maxSalary) {
      maxSalary = salary;
      luckyMan = name;
    }
  });
  return luckyMan;
}

console.log(manWithMaxSalaries(salaries)); // Bob

// завдання 3

let { mike: userMike, bob: userBob, nikola: userNikola } = users;

console.log(userMike); // Mike
console.log(userBob); // Bob
console.log(userNikola); // Nikola
