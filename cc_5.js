// Step 2 Creating an Array of Employee Objects 
const employees= [
    {name:"Emma Leyva", hourlyRate: 20, hoursWorked: 50},
    {name: "Sophia Leyva", hourlyRate: 17, hoursWorked: 15},
    {name: "Jae Diehl", hourlyRate: 14, hoursWorked: 10 }
];
// Step 3 Creating a Function 
function calculateBasePay(rate, hours) {
  if (hours <= 40) {
    return rate * hours;
  } else {
    return rate * 40; // Only pay for the first 40 hours
  }
}
console.log(calculateBasePay(20, 25)) // output 500
// Step 4 
