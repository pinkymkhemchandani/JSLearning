const arrayNumbers = [20,11,40,25,23,11,9,31,60,2,19];

console.log("******1******");

newArray =arrayNumbers.map((element)=>{
    return element +10;
});

console.log(newArray);

console.log("******2******");

newArray =arrayNumbers.map((element)=>{
    return element**2;
});

console.log(newArray);

console.log("******3******");

newArray =arrayNumbers.map((element,index)=>{
    return element+index;
});

console.log(newArray);

