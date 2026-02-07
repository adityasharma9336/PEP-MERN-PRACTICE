function createCounter() {
    let count = 0;
    function increment() {
        count++;
        console.log(count);
    }
    function decrement() {
        count--;
        console.log(count);
    }
    function reset() {
        count = 0;
        console.log(count);
    }
    return { increment, decrement, reset };
}
const counter = createCounter();
counter.increment(); // 1
counter.decrement(); // 1
counter.reset();     // 0


// 2
  
function bankAccount() {
    let balance = 0;
    return {
        deposit: amount => balance += amount,
        withdraw: amount => balance -= amount,
        getBalance: () => balance
    };
}
const acc = bankAccount();
acc.deposit(500);
acc.withdraw(200);
console.log(acc.getBalance()); // 300

// 13
// const arr = [1, 2, 3, 4];
// const result = arr.map(num => num * 2);
// console.log(result); // [2, 4, 6, 8]

//  14
const students = [
    { name: 'A', marks: 40 },
    { name: 'B', marks: 80 }
];
const result = students.filter(s => s.marks > 50);
console.log(result);


// 16
const names = ['ram', 'sam', 'tom'];
const results = names.map(name => name.toUpperCase());
console.log(result);
// // ['RAM', 'SAM', 'TOM']

//  18
// const arr = [1, 2, 2, 3, 3, 4];
// const result = [...new Set(arr)];
// console.log(result);
// // [1, 2, 3, 4]

// 17
// const employees = [
//   { name: 'A', salary: 2000 },
//   { name: 'B', salary: 5000 }
// ];
// const highestSalaryPerson = employees.reduce((max, curr) =>
//   curr.salary > max.salary ? curr : max
// );
// console.log(highestSalaryPerson);

// 19
//  const result = [1, 2, 3, 4, 5, 6]
//   .filter(num => num % 2 === 0)   
//   .map(num => num * 10);         \
//  console.log(result);
