// Step 2 Creating an Array of Employee Objects 
const employes0= [
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
  const calculateTaxes = (grossPay) => {
  return grossPay * 0.85;
};
const pay = 1000;
const netPay = calculateTaxes(pay);
console.log(`Gross Pay: $${pay}`);
console.log(`Net Pay after 15% tax: $${netPay}`);
// Step 6 Processing Payroll
function processPayroll(employees) {
    const { name, hourlyRate, hoursWorked } = employee;
    const regularHours = Math.min(hoursWorked, 40);
    const overtimeHours = Math.max(hoursWorked - 40, 0);

    const basePay = regularHours * hourlyRate;
    const overtimePay = overtimeHours * hourlyRate * 1.5;
    const grossPay = basePay + overtimePay;

    const taxRate = 0.2;
    const netPay = grossPay * (1 - taxRate);

    return {
        name,
        basePay,
        overtimePay,
        grossPay,
        netPay
    };
}
const employes1= [
  {name:"Emma Leyva", hourlyRate: 20, hoursWorked: 50},
    {name: "Sophia Leyva", hourlyRate: 17, hoursWorked: 15},
    {name: "Jae Diehl", hourlyRate: 14, hoursWorked: 10 }

];
  
const payrollResults = employees.map(processPayroll);
console.log(payrollResults);
// Step 7 Loop through employee array and logging the payroll 
const employes2= [
    {name:"Emma Leyva", hourlyRate: 20, hoursWorked: 50},
    {name: "Sophia Leyva", hourlyRate: 17, hoursWorked: 15},
    {name: "Jae Diehl", hourlyRate: 14, hoursWorked: 10 }
];
for (const employee of employes) {
    let regularHours = Math.min(employee.hoursWorked, 40);
    let overtimeHours = Math.max(employee.hoursWorked - 40, 0);
    let totalPay = (regularHours * employee.hourlyRate) + (overtimeHours * employee.hourlyRate * 1.5);

    const payroll = {
        name: employee.name,
        hourlyRate: employee.hourlyRate,
        hoursWorked: employee.hoursWorked,
        totalPay: totalPay.toFixed(2)  // rounding to 2 decimal places
    };

    console.log(payroll);
}