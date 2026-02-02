//   Selectors in JavaScript: they are fetch html elements from  so that we can READ/UPDATE/DELETE /STYLE them.
//  1. Get Element by ID : we use document.getElementById('idValue')
var a = document.getElementById('heading');
console.log(a);

a.style.color = "blue";

 a.style.padding = "20 px";



// 2. Get Elements by Class 
// we use document.getElementsByClassName('className')
var b = document.getElementsByClassName('para');
console.log(b);



//  IMP POINT FOR HTML COLLECTION
// it look like array but it is not array
// map , reduce, filter  will not work on HTML collection
// we can use for loop or for of loop to iterate through HTML collection

for(let list of b){
    list.style.color = "green";
}

// 3. Get Elements by Tag Name
    // we use document.getElementsByTagName('tagName')

    // imp point: returns HTML Collector,


// 4. Query Selector
// we use document.querySelector('cssSelector')

// 5. Query Selector All
// we use document.querySelectorAll('cssSelector')

