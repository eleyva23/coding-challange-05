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
// Step 4 overtime pay 
function calculateOvertimePay(rate, hours) {
  if (hours <= 40) {
    return 0; // No overtime pay if hours are 40 or less
  } else {
    const overtimeHours = hours - 40;
    const overtimeRate = rate * 1.5;
    return overtimeHours * overtimeRate;
  }
}
console.log(calculateOvertimePay(20,50)) // records the array that is over 40 hours 
  // Step 5 Tax Deduction 
  function calculateTaxes(grossPay) {
  const taxRate = 0.15; // 15% tax rate
  const taxAmount = grossPay * taxRate;
  const netPay = grossPay - taxAmount;

  console.log(`Gross Pay: $${grossPay.toFixed(2)}`);
  console.log(`Tax Deducted (15%): $${taxAmount.toFixed(2)}`);
  console.log(`Net Pay: $${netPay.toFixed(2)}`);

  return netPay; // Optionally return the net pay
}