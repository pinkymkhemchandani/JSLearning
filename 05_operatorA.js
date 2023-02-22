console.log("****1*****");

var JAvaScript ="JavaScript"
var GoogleChrome = "GoogleChrome"
var DeveloperSmart = "DEveloperSmart"


function squareOfWorldLength(word){
   console.log(`the number of word is ${word.length} and sqaure lenght ${word.length**2}`);
    
}

squareOfWorldLength(JAvaScript);
squareOfWorldLength(GoogleChrome); 
squareOfWorldLength(DeveloperSmart);

console.log("****2*****");

var Angular="I am Angular Developer"
var valuLenght = Angular.length
var SplitValue = Angular.split(" ");
var totalNumber = SplitValue.length;


function value(){
    console.log(`Length of Value is ${Angular.length}`);
    console.log(`Lenght of Splitstring is ${totalNumber}`);
    console.log( `Devided value is ${valuLenght/totalNumber}`);
    console.log(`multiplication Value is ${valuLenght*totalNumber}`);
}

value(Angular);