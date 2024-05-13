const n1 = 6; // First number
const n2 = 17; // Second number
const n3 = 24; // Third number
const n4 = 3; // Fourth number

// checking sum of all numbers equals 50
const Sum = (n1 + n2 + n3 + n4) == 50;

// check if at least two numbers are odd
const TwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// any number is larger than 25
const Over25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// for all numbers are unique
const Unique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// too see if all numbers are the same
const UniPt2 = (n1 === n2 && n1 === n3 && n1 === n4 && n2 === n3 && n2 === n4 && n3 === n4);

console.log("Are these numbers all the same? " + UniPt2);

// Check if numbers are divisible by 5
let DivisibleBy5 = (n1 % 5 === 0 && n2 % 5 === 0 && n3 % 5 === 0 && n4 % 5 === 0);
console.log(`Are these numbers divisible by 5? ${DivisibleBy5}`);

// Check if the first number is greater than the last number
const FirstGreaterThanLastGreaterThanLast = (n1 > n4);
console.log(FirstGreaterThanLast);

// math
const subNums = n2 - n1;
const multiplyNums = subNums * n3;
const moduloNums = multiplyNums % n4;



console.log(subNums, multiplyNums, moduloNums);
console.log('Using arithmetic chains: ' + subNums + ", " + multiplyNums + ", " + `${moduloNums}.`);

// Part 2:p
const milesToDestination = 1500;
const gasPrice = 3;
const fuelBudget = 175;
const fiftyFiveMPH = 30;
const sixtyMPH = 28;
const seventyFiveMPH = 23;

// Calculates gas required, price per gallon, and hours of travel for different speeds


let gasEquation = milesToDestination / fiftyFiveMPH;
let pricePerGallons = gasEquation * 3;
let hoursOfTravel = milesToDestination / 55;



    console.log(gasEquation);
console.log(pricePerGallons);
console.log(hoursOfTravel);
console.log("It would take " + hoursOfTravel + ' hours to get to where we want to on 55 miles per hour.');

// Similar calculations for other speeds omitted for brevity
//FUNCTION
function makeItEasier(miles, MPH) {
  let gasEquat = milesToDestination / MPH;
  let pricePerG = gasEquat * 3;
  let hoursOfTrav = milesToDestination / miles;
  let budgetFriendly = (pricePerG <= fuelBudget);
  
  console.log('Is this trip budget friendly? ' + budgetFriendly);
}

makeItEasier(55, fiftyFiveMPH);
makeItEasier(60, sixtyMPH);
makeItEasier(75, seventyFiveMPH);
