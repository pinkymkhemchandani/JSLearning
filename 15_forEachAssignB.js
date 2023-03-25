class Employee {
    constructor( emp_id ,emp_name,emp_dept,emp_salary,emp_company){
        this.emp_id =emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;
    }
}


const emp_anil = new Employee ( 22,"Anil","IT",50000,"TCS");
const emp_radha = new Employee(33,"Radhe","HR",74000,"WIPRO");
const emp_rishi = new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali = new Employee(66,"Sonali","Finance",45000 ,"Infy");
const emp_monika = new Employee(77,"Monika","IT",40000,"wipro");
const emp_viny = new Employee(88,"Vinayak","IT" ,74000,"TCS");
const emp_mahi= new Employee(99,"Mahesh","HR",85000,"Infy");

var arrayEmployees =[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];

console.log("******1******");
console.log("1.Find out TCS employee details and log name and company on console");

arrayEmployees.forEach(element => {
   if (element.emp_company == "TCS") {
    console.log(`TCS Employess : ${element.emp_name} ,${element.emp_company}`);
} 
    
});

console.log("******2******");
console.log("2.Log employee complete details whoes salry is more or equak to 50K");

arrayEmployees.forEach((element)=>{
if (element.emp_salary>=50000) {
    console.log(`salary more than 50k:${JSON.stringify(element)}`);
}        
})
console.log("******3******");
console.log("3.Find the sum of all employee salary and log on console");

let sumSalary = 0;
arrayEmployees.forEach((value)=>{
    return sumSalary = sumSalary+ value.emp_salary 
   
})
console.log(sumSalary);

console.log("*****4******");
console.log("4. Find the average salary and log on console");
let average = 0;
arrayEmployees.forEach(i => {
   return average = sumSalary/arrayEmployees.length
        
    }
    
);

console.log(`Average salary ${average}`);


console.log("*****5******");
console.log("Find the 'IT' or 'HR' Employee whoes salary is >= 75000, log complete details");

arrayEmployees.forEach(element => {
    if ((element.emp_dept == "IT" && element.emp_salary>= 75000) ||(element.emp_dept == "HR" && element.emp_salary>= 75000)) {
        console.log(element);
    }
});
