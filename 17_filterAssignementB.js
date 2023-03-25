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
const emp_monika = new Employee(77,"Monika","IT",40000,"WIPRO");
const emp_viny = new Employee(88,"Vinayak","IT" ,74000,"TCS");
const emp_mahi= new Employee(99,"Mahesh","HR",85000,"Infy");


const arrayEmployees =[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];


console.log("*******1*******");

const cmpEmployees = arrayEmployees.filter ((element) =>element.emp_company == "TCS").map((element)=>`Compay name :${element.emp_company} and Employee Name: ${element.emp_name} `);
console.log(cmpEmployees);



console.log("*******2*******");
let sum = 0
const employee = arrayEmployees.filter ((value) => value.emp_company == "WIPRO").map((value)=>sum =sum+value.emp_salary)
    console.log(`Average salary of employess in Wipro : ${sum/2}`);

// number of employees in wipro are 2.

console.log("*******3*******");

let sums = 0
const employees = arrayEmployees.filter ((value) => value.emp_company == "WIPRO" && "Infy").map((value)=>sums = sums +value.emp_salary)
const InfyEmployees =arrayEmployees.filter ((value) => value.emp_company ==  "Infy").map((value)=>sum = sum+value.emp_salary)
    console.log((employees )+ (InfyEmployees));
    const employe = arrayEmployees.filter ((value) => value.emp_company == "WIPRO" && "Infy").map((value)=>value.emp_company);
    console.log(employe);