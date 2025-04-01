let score = 33
// console.log(typeof score)
// console.log(score)

let score1 = "33abc"            // "33"  => 33
// console.log(typeof score1)     // "33abc" => NaN (Not a Number)
// console.log(score1)

let scoreA = Number (score1)
// console.log(typeof scoreA)
// console.log(scoreA)

let score2 = null
// console.log(typeof score2)
// console.log(score2)

let score3 = undefined
// console.log(typeof score3)
// console.log(score3)

let scoreB = true                 // True => 1
// console.log(typeof scoreB)
// console.log(Number(scoreB))

let scoreC = false                // False => 0
// console.log(typeof scoreC)
// console.log(Number(scoreC))

let isLoggedIn = "true"                   // "true" => 1
let booleanIsLoggedIn = Boolean (isLoggedIn)   // "false" => 0
// console.log(booleanIsLoggedIn)                // "" => 0/False
// console.log(typeof booleanIsLoggedIn)         // "abc/123"(non-empty string) => 1/True

let stringNum = 33
let stringNumber = String (stringNum)
// console.log(typeof stringNumber)
// console.log(stringNumber);


//********************** Operations ********************

let value = 3 
let negValue = -value
// console.log(negValue);


console.log(+"");        // When something is empty, it will be converted to 0
console.log(+"abc");    // When something is not a number, it will be converted to NaN

