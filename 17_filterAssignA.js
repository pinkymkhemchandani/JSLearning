const arrayNumbers = [20,11,40,25,37,49,9,90,60,2,19];
console.log("*******1*******");

let newResult = arrayNumbers.filter((element)=> {
    return element>50

}

);
console.log(`Numbers Which are greater than 50 are: (${newResult})`);

let evenNumbers = arrayNumbers.filter((number)=>{
    return number %2==0;

});

console.log(`Even Numbers are (${evenNumbers})`);


let oddNumbers = arrayNumbers.filter((number)=>{
    return number %2 !=0;

});

console.log(`Odd Numbers are (${oddNumbers})`);

let newNubers = arrayNumbers.filter((value)=>{
    return value % 5 == 0;

});

console.log(`Multiple of 5 Numbers are (${newNubers})`);

let betweenNumbers = arrayNumbers.filter ((element) =>{
    return element >20 && element < 50;
})
 console.log(`Element between 20 and 50 are(${betweenNumbers})`);