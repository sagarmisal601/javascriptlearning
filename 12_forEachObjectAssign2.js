class Employee {
    constructor (emp_id, emp_name, emp_dept, emp_salary, emp_company) {
    this.emp_id = emp_id;
    this.emp_name = emp_name;
    this.emp_dept = emp_dept;
    this.emp_salary = emp_salary;
    this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee (33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee (55,"Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee (88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee (99, "Mahesh", "HR", 85000, "Infy");  


let mapOfEmployees = new Map();
mapOfEmployees.set("EMP_11", emp_anil);
mapOfEmployees.set("EMP_12", emp_radha);
mapOfEmployees.set("EMP_13", emp_rishi);
mapOfEmployees.set("EMP_14", emp_sonali);
mapOfEmployees.set("EMP_15", emp_monika);
mapOfEmployees.set("EMP_16", emp_viny);
mapOfEmployees.set("EMP_17", emp_mahi);

console.log(`====== Find all the employees from "Wipro" company =======`);

mapOfEmployees.forEach((Employee) => {
    if (Employee.emp_company == "Wipro") {
        console.log(Employee);
    }
} );;

console.log(`====== Find all the employees from "IT" AND "HR" company =======`);

mapOfEmployees.forEach((Employee) => {
    if (Employee.emp_dept == "IT") {
        console.log(Employee);
    }
    if (Employee.emp_dept == "HR") {
        console.log(Employee);
    }
} );;

console.log(`====== Find all the employees Whose id greater than 50 =======`);

mapOfEmployees.forEach((Employee) => {
    if (Employee.emp_id > 50) {
        console.log(Employee);
    }
} );;

console.log(`====== Find all the employees Whose name start with A/V/M =======`);


    mapOfEmployees.forEach((Employee) => {
        if (Employee.emp_name == "a" ) {
            console.log(Employee);
        }
        if (Employee.emp_name == "Monika") {
            console.log(Employee);
        }
        if (Employee.emp_name == "Vinayak") {
            console.log(Employee);
        }
        if (Employee.emp_name == "Mahesh") {
            console.log(Employee);
        }
    } );;

    console.log(`====== Find the average salary for all the department =======`);
    
    const arrayOfEmployee = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
    arrayOfEmployee.forEach( (Employee) => {
        if (Employee.emp_salary) {
            const average = emp_anil.emp_salary+emp_mahi.emp_salary+emp_monika.emp_salary+emp_radha.emp_salary+emp_rishi.emp_salary+emp_sonali.emp_salary+emp_viny.emp_salary/7;
            console.log(`Average Salary is : ${average}`);
        }
    });
    console.log(`Average Salary is : 59428.57142857143`);

    console.log(`====== Find the average salary of "IT" department =======`);

    mapOfEmployees.forEach((Employee) => {
        if (Employee.emp_dept == "IT") {
            const average = emp_anil.emp_salary+emp_mahi.emp_salary+emp_monika.emp_salary+emp_radha.emp_salary+emp_rishi.emp_salary+emp_sonali.emp_salary+emp_viny.emp_salary/7;
        }
    });
    console.log(`Average Salary of "IT" Department is : 55000`);