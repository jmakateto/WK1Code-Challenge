let basicSalary = parseFloat(prompt("Enter basic salary:"));
let benefits = parseFloat(prompt("Enter benefits:"));

//  tax rates
const KRA_TAX_RATE = 10%;
const NHIF_RATE = 5%;
const NSSF_RATE = 2%;

// Calculations
let payee = basicSalary * KRA_TAX_RATE;
let nhifDeductions = basicSalary * NHIF_RATE;
let nssfDeductions = basicSalary * NSSF_RATE;
let grossSalary = basicSalary + benefits;
let netSalary = grossSalary = (payee + nhifDeductions + nssfDeductions);

console.log("Payee (Tax):", payee);
console.log("NHIF Deductions:", nhifDeductions);
console.log("NSSF Deductions:", nssfDeductions);
console.log("Gross Salary:", grossSalary);
console.log("Net Salary:", netSalary);
