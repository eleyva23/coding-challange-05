// Step 2 Creating an Array of Employee Objects 
const employees= [
    {name:"Emma Leyva", hourlyRate: 20, hoursWorked: 25},
    {name: "Sophia Leyva", hourlyRate: 17, hoursWorked: 15},
    {name: "Jae Diehl", hourlyRate: 14, hoursWorked: 10 },
];
// Step 3 Creating a Function 
function calculateBasePay (rate, hours) {
    const baseHours= Math.min(hours, 40);
    
    const basePay= rate * baseHours;
    
    return basePay;
}
console.log(calculateBasePay(rate,hours))
