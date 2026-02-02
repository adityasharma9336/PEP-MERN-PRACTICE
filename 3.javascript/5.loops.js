// for loops: print  odd numbers from 50 to 80
// starting point is 51 , increment  by 2 , iteration , stop at 80
  
 for ( let i = 51; i <= 80; i += 2) {
     console.log("odd numbers btw 50 to 80 are :", +i);
    
 }

//  nested for loop:
// where we are creatig multiple table grid;
// outer loop run for 3 times , innner loop should run 3 times for each iteration
// total iteration will be 3 * 3 = 9 times
for (let i = 1; i <= 5; i++) {
    console.log("Table of " + i);
    for (let j = 1; j <= 5; j++) {
        console.log(i + " * " + j + " = " + (i * j));
    }
}

//  while loop ;
//  write a program 5 to 0  countdown .but  1st u have check the condition then execute till while condition is true;
// let count = 5;
// while (count > 0) {
//     console.log("countdown:", +count);
    
// }

let attempt = 1;
do {
    console.log("Attempt :", +attempt);
    attempt++;
}while (attempt <= 5);  
console.log("Finished all attempts");