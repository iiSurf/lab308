// Part 1 -------------------------------------------------------------------------
//Initial Numbers to verify
const num1 = 10;
const num2 = 15;
const num3 = 20;
const num4 = 5;

//Do numbers add to 50? True/False
const isSum50 = (num1 + num2 + num3 +num4) === 50
console.log("Is the sum 50?", isSum50)

//Are at least 2 numbers odd? True/False
const areTwoOdd = (num1 % 2) + (num2 % 2) + (num3 % 2) + (num4 % 2) >= 2
console.log(`Are there two or more odd numbers?`, areTwoOdd)

//No numbers can be larger than 25
const areLargerThan25 = num1 < 25 || num2 < 25 || num3 < 25 || num4 < 25
console.log(`Are any numbers over 25?`, areLargerThan25)

//Are all numbers unique?
const isUnique = num1 != num2 && num1 != num3 && num1 != num4 && num2 != num3 && num2 != num4 && num3 != num4
console.log(`Are all numbers unique?`, isUnique)

//Did the numbers pass all validation checks?
const isValid = isSum50 && areTwoOdd && areLargerThan25 && isUnique

console.log(`Do the numbers pass all validation checks?`, isValid)

// Checking to see if all numbers are divisible by 5. They are because I did not get a result of a decimal number. Storing result in varaible divisbleBy5.
const divisibleBy5 = ((num1 + num2 + num3 + num4) / 5);

// Stored result into a variable. Value is 10 and printed to terminal.
console.log(divisibleBy5);

//Checking to see if number 1 is larger than number 4 and that is true. Then storing in to a variable.
let isNum1LargerNum4 = (num1 > num4);

// Checking to see if result is true
console.log(`Is number 1 larger than number 4? ` + isNum1LargerNum4);

// Arithmetic chain has resulted in 20 as the answer and stored in to variable name chainNumbers.
let chainNumbers = (((num2 - num1) * num3) / num4);

// Printing chainNumbers result to terminal.
console.log(chainNumbers);

// Checks to see if all the console.log values are working and usable. All testes have passed with a true value.
console.log (`The four numbers are valid according to the provided criteria. : ${isValid}. The four numbers are valid according to the provided criteria. : ${isSum50}. The four numbers are valid according to the provided criteria. : ${areTwoOdd}. The four numbers are valid according to the provided criteria. : ${areLargerThan25} The four numbers are valid according to the provided criteria. : ${isUnique} The four numbers are valid according to the provided criteria. : ${isNum1LargerNum4} The four numbers are valid according to the provided criteria. : ${chainNumbers}`);


// Part 2 -------------------------------------------------------------------------

// 1500 mi trip in total
// 55 mi / hr with 30 mi / gal
// 60 mi / hr with 28 mi / gal
// 75 mi / hr with 23 mi / gal
// $175 Budget
// Petrol Station charges $3 / gal

//TODO: How many gallons of fuel will you need for the entire trip?
//TODO: Will your budget be enough to cover the fuel expense?
//TODO: How long will the trip take, in hours?

// String COncatenation looks like `blah` + blahBlah
// Template literals looks like `This is a ${blahBlahBlah}`

// At 55 miles per hour, you get 30 miles per gallon.
const mph55 = 55;
// At 60 miles per hour, you get 28 miles per gallon.
const mph60 = 60;
// At 75 miles per hour, you get 23 miles per gallon.
const mph75 = 75;

const totalDeistance = 1500;

// const milesConsumed = totalDistance / 

// Part 3 -------------------------------------------------------------------------