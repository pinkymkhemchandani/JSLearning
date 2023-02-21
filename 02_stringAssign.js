console.log("*****1*****");
console.log("**Function with no argument and no return value***");
function stringHandsOn(){
   console.log("Hey you are doing good , keep it up")
}

stringHandsOn();

console.log("****2****");
var stringHandsOn = "Hey you are doing good , keep it up"
var sumOfChar = stringHandsOn.length
console.log("Lenghth of string:",sumOfChar);

console.log("***3***");
var stringHandsOn = "    Hey you are doing good , keep it up    ";
var removeSpace = stringHandsOn.trim();
console.log("Remove Space of String:",removeSpace , stringHandsOn.length , removeSpace.length);

console.log("****5****");

var charcAtindex0 = removeSpace.charAt(0);
var charAtLastIndex=removeSpace.charAt(removeSpace.length-1);
console.log("First character:",charcAtindex0,"&Last char is = ",charAtLastIndex)
console.log("*****6*****");
console.log("Total words: ", removeSpace.length);


console.log("***7***");
var indexOfgood = stringHandsOn.indexOf("good");
console.log("Index of char good is =" ,indexOfgood);

console.log("*****8*****")
var sliceResult = stringHandsOn.slice(22);
console.log("By slice method:",sliceResult);
var sliceResult = stringHandsOn.slice(22);
console.log("By substring method:",stringHandsOn.slice(22));

console.log("*****9*****");
console.log("Is string ends with word up after step 3: ", removeSpace.includes("up"));

console.log("*****10*****");
console.log("is string start with hey after trimming:",removeSpace.includes("Hey"));




 
