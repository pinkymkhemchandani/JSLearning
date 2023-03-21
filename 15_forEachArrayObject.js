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

var array_employees =[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];


console.log("Find the employees whose name start with R....");
array_employees.forEach(array_employees => {
    let empName = array_employees.emp_name;
    if (empName.startsWith("R")) {
        console.log(array_employees);
    }
});


console.log("Infy employees total salary");
let totalSalaryOfInfy = 0;
array_employees.forEach(array_employees => {
    if(array_employees.empCompany=="Infy") {
        totalSalaryOfInfy = totalSalaryOfInfy + array_employees.empSalary; 
    }
});
console.log(totalSalaryOfInfy);