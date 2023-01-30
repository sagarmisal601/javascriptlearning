console.log("-------------------- Assignment 2 --------------------");
 class Employee {
    constructor (emp_id, emp_name, emp_dept, emp_salary, emp_company) {
    this.emp_id = emp_id;
    this.emp_name = emp_name;
    this.emp_dept = emp_dept;
    this.emp_salary = emp_salary;
    this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(88, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee (33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee (77,"Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(11, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee (55, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee (99, "Mahesh", "HR", 85000, "Infy"); 

const array_Employee = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];
console.log(emp_anil);
console.log(emp_radha);
console.log(emp_rishi);
console.log(emp_sonali);
console.log(emp_monika);
console.log(emp_viny);
console.log(emp_mahi);

console.log("-------------------- 1. Sort the array_Employee in ascending order of employee id --------------------");
array_Employee.sort((employee1, employee2)=>{
    return employee1.emp_id > employee2.emp_id ? 1 : -1;
});
array_Employee.forEach((currentValue)=>{
    console.log("Employee ID is : ",currentValue.emp_id, "  Employee Name is :",currentValue.emp_name, "  Employee departement is : ",currentValue.emp_dept);
});

console.log("-------------------- 2. Sort the array_Employee in ascending order of employee department --------------------");
array_Employee.sort((employee1, employee2)=>{
    return employee1.emp_dept > employee2.emp_dept ? 1 : -1;
});
array_Employee.forEach((currentValue)=>{
    console.log("Employee ID is : ",currentValue.emp_id, "  Employee Departement is :",currentValue.emp_dept, "  Employee company is : ",currentValue.emp_company);
});


console.log("-------------------- 3. Sort the array_Employee in descending order of employee salary --------------------");
array_Employee.sort((employee1, employee2)=>{
    return employee1.emp_salary < employee2.emp_salary ? 1 : -1;
});
array_Employee.forEach((currentValue)=>{
    console.log("Employee Name is : ",currentValue.emp_name, "  Employee Salary is :",currentValue.emp_salary, "  Employee company is : ",currentValue.emp_company);
});