const arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11];
console.log('********1*******');

console.log(`Total elements available :${arrayNumbers.length}`);

console.log('********2*******');
console.log(`First and Last numbers:${arrayNumbers[0]} & ${arrayNumbers[arrayNumbers.length-1]}`);

console.log('********3*******');
console.log(`third last Property:${arrayNumbers[arrayNumbers.length-3]}`);

console.log('********4*******');
const array=[];

for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (element%2==0) {
        array.push(element);
    }
    
}
console.log(`Even Numbers ${array}`);


console.log('********5*******');
const arrays=[];

for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (element%2!==0) {
        arrays.push(element);
    }
    
}
console.log(`Odd Numbers ${arrays}`);


console.log('********6*******');
var index = 0 ;
let sum = 0 

for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (element%2==0) {
        
        sum = sum+element;
    }
    
}
console.log(`Even Numbers sum : ${sum}`);

console.log('********7*******');
var index = 0 ;
let sum1 = 0 

for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (element%2!==0) {
        
        sum1 = sum1+element;
    }
    
}
console.log(`Odd Numbers sum : ${sum1}`);


console.log('********8*******');
var index = 0 ;
let sum2 = 0 

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    sum2 = sum +sum1
    
}
 console.log(`Sum of All Numbers : ${sum2}`);

 


console.log('********10*******');
const is115Available = arrayNumbers.includes(115);
console.log(`Is 115 available: ${is115Available} `);

console.log('********11*******');
const is23Available = arrayNumbers.includes(23);
console.log(`Is 23 available: ${is23Available} `);

console.log('********12*******');

arrayNumbers.splice(3,0,55,66)
console.log(arrayNumbers);

console.log('********13*******');
arrayNumbers.splice(0,4)
console.log(arrayNumbers);




