console.log(`start`);
var num = 10;
if(num>0){
    console.log(`inside in`);
    console.log(`Number is positive ${num}`);

}
console.log(`end`);

var ageForVote =10;
if(ageForVote>=18){
    console.log("You are eligible for voting");
    console.log(`Age is:${ageForVote}`);

}

console.log("End of next if block");


function checkEvenOdd(num) {
    if (num%2==0) {
        return "Even"
        
    }
    if (num%2!=0) {
        return "Odd" 
    }
    
}
var result = checkEvenOdd(45);
console.log(`Given Number 45 is ${result}`);
var result = checkEvenOdd(70);
console.log(`Given Number 70 is ${result}`);

var num1= 5;
if (num1>0) {
    console.log(`Number ${num1} is Positive`);
    
} else {
    console.log(`Number ${num1} is Negative`);
    
}
    
function maleMarriageEligibilty(gender,age,boyname) {
    if (gender=="Male" && age>21) {
        console.log("You are eligible");
     } else {
        console.log("Not Eligible"); }
    
    } 
    maleMarriageEligibilty("Male", 25, "Billgates");
    maleMarriageEligibilty("Male", 20, "Anil");
        
    
    
