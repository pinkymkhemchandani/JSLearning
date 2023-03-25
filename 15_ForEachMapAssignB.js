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

const mapEmployees = new Map();
mapEmployees.set(1,emp_anil),
mapEmployees.set(2 ,emp_radha),
mapEmployees.set(3,emp_rishi),
mapEmployees.set(4 ,emp_sonali),
mapEmployees.set(5 ,emp_monika),
mapEmployees.set(6 ,emp_viny),
mapEmployees.set( 7,emp_mahi),



// mapEmployees.forEach((key,value) => {
//     console.log(`${emp_id} ===> Name: ${emp_name}`)
    
// });

myMap.forEach(function(value, key, myMap ) {
    console.log(`${emp_id} ===> Name: ${emp_name}`);
});