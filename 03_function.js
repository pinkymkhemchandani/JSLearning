//Function with no arguments and no returm value
function showFullName(){
    console.log("My full name is: Pinky khemchanadani");

}
showFullName();// function call or invocation

//Function with  arguments and no returm value
function showAge(age){
    console.log("My age is:",age);

}

showAge(32);

//Function with no arguments and  returm value
function fullName(){
    var name="Pinky Khemchandani"
    return name;
}
 var fName = fullName();
 console.log(fName);

 //Function with  arguments and  returm value

 function sumOfNumbers(num1,num2,num3){
    var sum = num1+num2+num3;
    return sum;


 }

 var sumResult =sumOfNumbers(10,45,79);
 console.log(sumResult);

 var num1 = 100; 
 var num2 = 200; 

 var str1 = "Sweety"; 
 var str2 = "Cutey"; 

  var name1= "Akshay";
  var name2 = "Sachin";

  function swapVariables(value1, value2) { 
    console.log("Before Swap: ", value1, value2); 
    var temp = value1;
     value1 = value2; 
     value2 = temp;
      console.log("After Swap: ", value1, value2);
       return "Swapping variables successfully completed"; }

var swapResult = swapVariables(num1, num2); // Function call or Function invoke 
console.log(swapResult); 
var swapResult2 = swapVariables(str1, str2); 
console.log(swapResult2);