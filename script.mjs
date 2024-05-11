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
console.log(`chain numbers value after operations is`, chainNumbers);
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
const totalDistance = 1500;
// At 55 miles per hour, you get 30 miles per gallon.
const mph55 = 55;
const mpg55 = 30;

let fuelNeedAt55mph = totalDistance / mpg55;

console.log(`the fuel needed at 55 mph is: `, fuelNeedAt55mph, `gallons`);
// At 60 miles per hour, you get 28 miles per gallon.
 const mph60 = 60;
const mpg60 = 28;

let fuelNeedAt60mph = totalDistance / mpg60;

console.log(`the fuel needed at 60 mph speed is:`, fuelNeedAt60mph);
// At 75 miles per hour, you get 23 miles per gallon.
 const mph75 = 75;
const mpg75 = 23;

let fuelNeedAt75mph = totalDistance / mpg75;

console.log(`the fuel needed at 75 mph speed is:`, fuelNeedAt75mph);

const fuelBudget = 175; // in dollars

// $3 average cost of fuel

const fuelCost = 3;

const maxAmountOfFuel = fuelBudget / fuelCost;

console.log(`The maximum amount of fuel that can be purchased from the budget is ${maxAmountOfFuel} gallons`);

// Find time taken for the trip.

// Time at 55mph
const timeAt55 = totalDistance /  mph55;
console.log(`It will take about ${timeAt55} hours. with 30 gallons of fuel`);

// Time at 60mph
const timeAt60 = totalDistance /  mph60;
console.log(`It will take about ${timeAt60} hours with 28 gallons of fuel`);

// Time at 75mph
const timeAt75 = totalDistance /  mph75;
console.log(`It will take about ${timeAt75} hours with 23 gallons of fuel`);

console.log(`At ${mph60} mph you will need ${fuelNeedAt60mph} gallons of fuel and the total trip will take ${timeAt60} hours and will stay within budget.`);