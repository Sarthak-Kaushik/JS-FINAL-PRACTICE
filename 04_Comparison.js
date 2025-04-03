console.log(2 == 1);
console.log(2 != 1);

console.log("2" >1);
console.log("2" < 1);

console.log(null >0);       // false
console.log(null == 0);     // false
console.log(null >= 0);     // true

// comparison operators work in differnt ways in javascript

// ===

console.log("2" === 2);     // false - because "2" is a string and 2 is a number
console.log(2 === 2);       // true



// === checks for value and type both whereas == checks for value only.


// Avoid comparisons with null, undefined, ==, >, <, >=, <=, etc. 
// they will confuse you and will sometimes give you unexpected results.
// Use === and !== instead.
// === is strict equality operator
// !== is strict inequality operator
// === is used to compare values and types
// !== is used to compare values and types


