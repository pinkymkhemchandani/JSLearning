
var arraySeasonalFruits = ["Banana","Orange","Apple","Mango","WaterMelon"];
console.log("****** 1 ******");
console.log(`First element & Last element in the given array is: ${arraySeasonalFruits[0]} & ${arraySeasonalFruits[arraySeasonalFruits.length-1]} `);

console.log("****** 2 ******");
arraySeasonalFruits.unshift("Papaya")
console.log(`Element Before Banana is: ${arraySeasonalFruits}`);

console.log("****** 3 ******");
var arraySeasonalFruits = ["Banana","Orange","Apple","Mango","WaterMelon"];
arraySeasonalFruits.splice(3,1);
console.log(`Remove Mango from arrey is:${arraySeasonalFruits}`);

console.log("****** 4 ******");
var arraySeasonalFruits = ["Banana","Orange","Apple","Mango","WaterMelon"];
arraySeasonalFruits.push("PineApple")
console.log(`Add Element at last index is:${arraySeasonalFruits}`);

console.log("****** 5 ******");
var arraySeasonalFruits = ["Banana","Orange","Apple","Mango","WaterMelon"];
arraySeasonalFruits.splice(4,0,"DragonFruit");
console.log(`Element Before Watermelon is:${arraySeasonalFruits}`);

console.log("****** 6 ******");
var arraySeasonalFruits = ["Banana","Orange","Apple","Mango","WaterMelon"];
arraySeasonalFruits.splice(1,1,"Kiwi");
console.log(`Replace Element is: ${arraySeasonalFruits}`);

console.log("****** 7 ******");
var arraySeasonalFruits = ["Banana","Orange","Apple","Mango","WaterMelon"];
var newFruitarray = arraySeasonalFruits.slice(1,5)
console.log(`Index from 1 to 4 is:${newFruitarray}`);

console.log("****** 8 ******");
var arraySeasonalFruits = ["Banana","Orange","Apple","Mango","WaterMelon"];
var lastElements = arraySeasonalFruits.slice(-3)
console.log(`Select last 3 Elements is:${lastElements}`);

