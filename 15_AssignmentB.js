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
for (const working of arrayEmployees ) {
    let EmpCompany= working.emp_company;
    if (EmpCompany=="TCS") {
        console.log(`Working Employyes in Company ${working.emp_name} who work in  ${working.emp_company}`)
    }
    
}

console.log("******2******");
for (const working of arrayEmployees) {
    let departmentEmp = working.emp_dept;
    if (departmentEmp == `Finance`) {
        console.log(`Employee :${working.emp_name} in ${working.emp_dept} department `);
        
    }
    
}

console.log("******3******");
for (const working of arrayEmployees) {
    // let NameStarts = arrayEmployees.emp_name;
    if (working.emp_name.startsWith("R")) {
        console.log(`Name starts with R : ${working}`);
       
}}


console.log("******4******");
for (const working of arrayEmployees) {
    let salaryEmp = working.emp_salary;
    if (salaryEmp>75000) {
        console.log(`SAlary grater than 75k :${working.emp_name} and company is:${working.emp_company} and salary is:${working.emp_salary}`);
    }
    
}

console.log("******5******");
for (const working of arrayEmployees) {
    let salaryEmp = working.emp_salary;
    let departmentEmp = working.emp_dept
    if (salaryEmp>=50000 && departmentEmp == "IT" ) {
        console.log(`Salary greater than equal to 50k and from IT department : ${JSON.stringify(working)}}`);
    }
    
}