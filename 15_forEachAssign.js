const arrayNumbers = [1,-7,40,502,-77,91,0,108,89,-601];

console.log("******1******");

arrayNumbers.forEach(element => {

});
console.log(arrayNumbers);

console.log("******2******");

arrayNumbers.forEach(num => {
   if (num>0) {
    console.log(`Positive Number : ${num}`); 
   }   
});

console.log("******3******");

const negativeNumbers =[];

arrayNumbers.forEach(num => {
    if (num<0) {
        console.log(`Negative Numbers : ${num}`);
        
    }
});

console.log("******4******");

arrayNumbers.forEach(num => {
    if (num%2==0) {
        console.log(`Even Numbers:${num}`);
    }
    
});

console.log("******5******");

let sum = 0 ;
arrayNumbers.forEach( (num) => {
    sum=sum+num; 
        
    }
    
);

console.log(`sum of Numbers : ${sum}`);

console.log("******6******");

arrayNumbers.forEach((num,index) => {
    if (index%2==0) {
        console.log(`Index Of number : ${index}`);
    }
});