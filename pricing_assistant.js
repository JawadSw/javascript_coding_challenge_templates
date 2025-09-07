// Coding Challenge 2a

// Code goes here 
const productName = "potato";
let costPerUnit = 1.00;
let basePrice = 2.00;
let discountRate = 0.15;
let salesTaxRate =  0.7;
let fixedMonthlyCosts = 100;

let discountedPrice = basePrice * (1 - discountRate);
let finalPriceWithTax = discountedPrice * (1 + salesTaxRate);
let profitPerUnit = finalPriceWithTax - costPerUnit;
let breakEvenUnits = Math.ceil(fixedMonthlyCosts / profitPerUnit);
let isProfitablePerUnit = profitPerUnit > 0;
console.log(productName);
console.log("discountedPrice: $" +discountedPrice.toFixed(2));
console.log("finalPriceWithTax: $" +finalPriceWithTax.toFixed(2));
console.log("profitPerUnit: $" +profitPerUnit.toFixed(2));
console.log("breakEvenUnits: $" + breakEvenUnits.toFixed(2));
console.log(isProfitablePerUnit);



