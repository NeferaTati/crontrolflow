/* list of values we have initiallty have given */
const radius = 5;
const pi = 3.1415;
const Area = pi * radius * radius;
const plantarespace = 0.8;
const week1 = 20 
const week2 = 40 
const week3 = 80
const Week10 =100
/* Area of plant math*/
/*This is where we multiply numbers of plants which has an avaible sapce const week1 = plant space * week1plants*/

const  APW1 = plantarespace * week1; 
const  APW2    = plantarespace * week2;
const APW3    = plantarespace * week3

const w1_Total_Area = APW1 / Area *100;
console.log(w1_Total_Area)

const w2_Total_Area = APW2 / Area * 100;
console. log ()
 
const w3_Total_Area = APW3 / Area * 100;
console.log()

function plantstate() {

    if (w3_Total_Area>=80 || 0===3) { 
        console.log("pruned")
    }
    if (w2_Total_Area>=50 || w2_Total_Area < 80);
     {console.log("Monitor")
    }
    
    if (w1_Total_Area<=50 || 6===3)
    {console.log("Planted")}
}


plantstate(week1)
plantstate(week2)
plantstate(week3)
plantstate(Week10)

// code Reviewed in class


// Constants for the circle's geometry and plant requirements

// Define Pi to approximate circle calculations
const PI = 3.1415;
// Radius of the circular garden in meters
const radis = 5;
// Calculate the area of the circle
const area = PI * radis * radis;
// Number of plants at the beginning
const initialPlants = 20;
// Required space per plant in square meters
const spacePerPlant = 0.8;
// Calculate maximum number of plants the garden can hold
const maxCapacity = area / spacePerPlant;

function plantGro(weeks) {
  // Calculate the number of plants after the given number of weeks *Math.Pow-returns power command
  console.log();
  const plantCount = initialPlants * Math.pow(2, weeks);
  // Check if the plant count exceeds 80% of the garden's capacity
  if (plantCount > maxCapacity * 0.8) {
    console.log(`Week ${weeks}: Prune the plants. Too many plants!`);
    // Check if the plant count is between 50% and 80% of the garden's capacity
  } else if (
    plantCount >= maxCapacity * 0.5 &&
    plantCount <= maxCapacity * 0.8
  ) {
    console.log(
      `Week ${weeks}: Monitor the plants. They are growing within acceptable limits.`
    );
  } else {
    console.log(`Week ${weeks}: Plant more. There is room for more plants.`);
  }
}
// Plants double in number every weekconst

// Decision making based on the capacity thresholds

// Example function calls to simulate plant growth for 1, 2, and 3 weeks
// Simulate growth for 1 week
plantGro(1);
// Simulate growth for 2 weeks
plantgro(2);
// Simulate growth for 3 weeks
plantGro(3);