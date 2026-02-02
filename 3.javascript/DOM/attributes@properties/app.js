//  DOM PROPERTIES
// 1.innerText : it os aware css styling , but it dint show case hidden content/ text and it also only visible congtent;

// const a = document.querySelector("p");
// console.log(a);
// console.log(a.innerText); // it will not show hidden text

// 2.textContent : it is not aware of css styling , it will show all the content even hidden content also;and it is fastest
// console.log(a.textContent);

// 3.innerHTML : it will show complete html content inside the element including tags;
// console.log(a.innerHTML);

// input field: this property is used to slect text and get or set user input

const input = document.querySelector("input");
console.log(input.value); // to get the value

input.value = "Aditya"; // to set the value to the input field
console.log(input.value);

console.log(input.getAttribute("type")); // to get attribute value

var image = document.querySelector("img");
console.log(image.getAttribute("src")); // to get src attribute value