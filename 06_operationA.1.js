console.log("*****1*****");

function greaterNumber(number1,number2){
    var greatNumberResult = number1>number2 ? number1: number2; 
    console.log(`Greater number is : ${greatNumberResult}`);

}

greaterNumber(10,-10);
greaterNumber(800,899);

console.log("*****2*******");

function isEvenOrOddNum(value){
    var Result = value%2 ? "False" : "True";
    console.log(`Result of value is Even: ${Result}`);
}

isEvenOrOddNum(29);
isEvenOrOddNum(44);
isEvenOrOddNum(0);
isEvenOrOddNum(101);


console.log("******3******");

function wordLength(word){
    var lengthResult = word.length;
    var wordResult = word.length%2 ? "EVEN" : "ODD";
    console.log(`Wordlength is even or odd for word: ${wordResult}`);
}

wordLength("JavaScript");
wordLength("developer");
wordLength("Google");