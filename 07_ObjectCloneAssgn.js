const arrayNums =[20,3,4,56,90,400,49]
console.log(`********1*******`);

const totalNumber = arrayNums;
totalNumber.push(55,65);
console.log(arrayNums);
console.log(totalNumber);

console.log(`******2******`);
const totalOfNumber = {...arrayNums};

totalOfNumber.push= 10,25;
console.log(`original== ${totalOfNumber.push}`);    



