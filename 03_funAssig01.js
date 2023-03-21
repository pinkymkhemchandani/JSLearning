//Function with no arguments and no returm value
console.log("******1******");
function myHobby(){
    console.log("myHobby is:sketching");
    }
    myHobby();

function myDream(){
    console.log("My Dream is to become best developer");

}
myDream();

console.log("******2*****");

function personalDetails(firstName,lastName,collageName){
console.log("my first name is:pinky","my last name is:khemchandani","my collage name is:GTU");

}
personalDetails();

console.log("******3*****");
function swapValueDude(value1,value2){
var temp=value1;
console.log("Before swap:",value1,value2);
value1=value2;
value2=temp;
console.log("after swap:",value1,value2);
}
swapValueDude("virat","Anushka");
swapValueDude(1000,2000);

console.log("******4*****");
function addThreeValues(num1,num2,num3){
    var sum=num1+num2+num3;
    return sum;

}

var sumResult = addThreeValues(10.23,600,40);
console.log("Addition of values:",sumResult);

var sumResult = addThreeValues("hello", "Good",  "Morning");
console.log("Addition of values:",sumResult);



