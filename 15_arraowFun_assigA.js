console.log("******1*****");
let show= () => console.log("Good Morning , Today is Monday");
show();

console.log("******2*****");

let multiply = (num1,num2,num3=1) => console.log(`multiplication of three values are: ${num1*num2*num3}`);
multiply(5,5,2);
multiply(10,4);

console.log("******3*****");
let sum = (num1,num2,num3,num4,num5) => { 
    const result = num1+num2+num3+num4+num5;
return result;}

const sumResult = sum (100,100,200,349,756);
console.log(`Sum of result is: ${sumResult}`);

const sumOfResult = sum ("i am "," learning "," ES6 "," features "," in depth ");
console.log(sumOfResult);