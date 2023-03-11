let student={
    firstName :"Pinky ",
    lastName :"Khemchandani",
    isWorking: true,
    age:27,
    collageName:"GTU",
    address : {
    street: "waka",
    city: "Pune",
    PIN:"431204"

}
}


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

console.log(student.address.city);


student.address.PIN = "431205"
console.log(student.address.PIN);

student.marks = {
    math: 80,
    physics: 60,
    drawing: 70
}

console.log(student.marks);

friends : ["Bill","steve","Elon"]

console.log(student.friends[student.friends.lenght-1]);

// addressDetails: function (){
//     return `Address is: Street ${this.address.street}, City ${this.address.city}, PIN ${this.address.PIN}`
//  }