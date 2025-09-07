// Coding Challenge 2b

// Code goes here
const itemName = "USB-C Cable";
let unitCost = 3.25;
let currentStock = 120;
let reorderLevel = 50;
let targetStock = 300;
let weeklyDemand = 20;
let supplierLeadTimeWeeks = 2;
let weeksOfCover = weeklyDemand > 0 ? currentStock / weeklyDemand : Infinity;
let stockDeficit = Math.max(0, targetStock - currentStock);
let reorderQuantity = (currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks) ? Math.ceil(stockDeficit) : 0;
let estimatedReorderCost = reorderQuantity * unitCost;
let reorderNow = currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks
console.log(itemName);
console.log(weeksOfCover);
console.log(reorderNow);
console.log(reorderQuantity);
console.log("estimatedReorderCost: $" +  estimatedReorderCost.toFixed(2));

