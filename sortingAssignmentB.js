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

console.log(`********1. Assending order of employee id**********`);
const assendingIds = arrayEmployees.sort((emp1,emp2)=>{
    return emp1.emp_id>emp2.emp_id ? 1 :-1;
}).map ((emp1,emp2)=> `Id : ${emp1.emp_id}, Name : ${emp1.emp_name} , Department : ${emp1.emp_dept}` )

console.table(assendingIds)

console.log(`********2. Assending order of Department********`);
const assendingDepartment = arrayEmployees.sort((dep1,dep2)=>{
    return dep1.emp_dept>dep2.emp_dept? 1 :-1;
}).map ((dep1,emp2)=> `Id : ${dep1.emp_id}, Department: ${dep1.emp_dept} , Company : ${dep1.emp_company}` )

console.table(assendingDepartment);


console.log(`********3. Assending order of salary********`);
const assendingSalary = arrayEmployees.sort((sal1,sal2)=>{
    return sal1.emp_dept>sal2.emp_dept? -1 :11;
}).map ((sal1,sal2)=> `Name : ${sal1.emp_name}, SAlary : ${sal1.emp_salary} , Comapny : ${sal1.emp_company}` )

console.table(assendingSalary);
