var greet = "Good Morning";
console.log(typeof greet);

console.log("Total number of characters available into this string variable- greet");
var greetLength=greet.length; // in proprty ther is no need to use "paratheses()".
console.log(greetLength); 

console.log("find the character by index value");
var charcAtindex3 = greet.charAt(3);
console.log(charcAtindex3);

console.log("FInd the last character ");
var charAtLastIndex=greet.charAt(greetLength-1);
console.log("Last char is = ",charAtLastIndex);

console.log("Find the index by character value");
var indexOfM = greet.indexOf("M");
console.log("Index of char M is =" ,indexOfM);

console.log("Index of char which is not available into the string: ", greet.indexOf('z'));

console.log("Index of o char: ", greet.indexOf('o'));
console.log("Index of o char using lastIndexOf(): ", greet.lastIndexOf('o'));

var replaceResult = greet.replace("Morning", "Evening");
console.log(replaceResult);
console.log(greet);

console.log("Upper Case:", replaceResult.toUpperCase());
console.log("Upper Case:", replaceResult.toLowerCase());

var myName = "   Mohit   Sharma  ";
var myNameAfterTrim = myName.trim();
console.log("Removing extra start and end spaces using trim(): ",myNameAfterTrim, myName.length, myNameAfterTrim.length);

console.log("includes()");
console.log("Is substring Mor includes in the greet or not: ", greet.includes("Mor"));
console.log("Is substring Afternoon includes in the greet or not: ", greet.includes("Afternoon"));
console.log("Is substring o includes in the greet or not: ", greet.includes("o"));

console.log("slice() method");
var sliceResult = greet.slice(5, 12);
console.log(sliceResult);
console.log(greet.slice(2, 5));

console.log("split() method");
var greet = "Good Morning";
var splitResult = greet.split(" ");
console.log(splitResult);
console.log(typeof splitResult);

console.log("split() method");
var greet = "Good Morning my dear friend";
var splitResult = greet.split(" ");
console.log(splitResult);
console.log("Total words: ", splitResult.length);

var myFriendList = "Billgates, Stew Job, Elon Musk, Ratan Tata, Sundar Pichai, Satya Nadella, Narayan Murti, Nandan Nilekani, Larry Page, Surgey Brain, Tim Cook";
var friendList = myFriendList.split(",");
console.log(friendList);
console.log("Total words: ", splitResult.length);
