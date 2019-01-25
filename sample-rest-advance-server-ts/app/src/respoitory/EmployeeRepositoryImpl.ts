import EmployeeRepository from "./EmployeeRepository";
import Employee from "../model/Employee";

let employees: Employee[] = [{ employeeId: 1, employeeName: 'john' }]

export default class EmployeeRepositoryImpl implements EmployeeRepository {

    create(employee: Employee) {
        employee.employeeId=employees.length+1;
        employees.push(employee);
        return employee;
    }

    getOne(id: number) {
        let employee: Employee = employees.filter(ele => ele.employeeId == id)[0];
        if (employee) {
            return employee;
        }else{
        throw new Error("Employee not Found.");
        }
    }

    findAll(): Employee[] {
        return employees;
    }

    update(id: number, data: Employee) {
        let employee: Employee = employees.filter(ele => ele.employeeId == id)[0];
        if (employee) {
            data.employeeId = employee.employeeId;
            employees[employees.indexOf(employee)] = data;
            return true;
        }
        return false;
    }

    delete(id: number) {
        let employee: Employee = employees.filter(ele => ele.employeeId == id)[0];
        if (employee) {
            employees.splice(employees.indexOf(employee), 1);
            return true;
        }
        return false;
    }

}