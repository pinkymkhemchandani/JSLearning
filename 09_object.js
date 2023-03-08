let student={
    firstName :"Pinky ",
    lastName :"Khemchandani",
    isWorking: true,
    age:27,
    collageName:"GTU",

};
console.log(student);
console.log(typeof student);

// . Dot Notation
console.log(student.firstName);

// [] Notation
console.log(student["lastName"]);

let collageName ="GTU"
student.collageName = "COEP Pune"
console.log(student["collageName"]);

console.log(student.age);

//Add new property 

student.city = "Mumbai";
student.country = "india";
console.table(student);

// Delete the property

delete student.isWorking
console.log(student);

// Empty Object
let teacher ={}

teacher.firstName ="Mohit"
console.log(teacher);


