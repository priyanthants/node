import * as express from 'express';
import { truncate } from 'fs';

let employees: any[] = [{ employeeId: 1, employeeName: 'john' }];

class Service {

    constructor() {
    }


    public getAllEmployees(): any[] {
        return employees;
    }

    public getOneEmployee(id: number): any {
        let employee: any = employees.filter(ele => ele.employeeId == id)[0];
        if (employee) {
            return employee;
        } else {
            return false;
        }
    }

    public createAEmployee(employee: any): any {
        employee.employeeId = employees.length + 1;
        employees.push(employee);
        return employee;
    }

    public updateAEmployee(id: number, data: any): boolean {
        let employee: any = employees.filter(ele => ele.employeeId == id)[0];
        if (employee) {
            data.employeeId = employee.employeeId;
            employees[employees.indexOf(employee)] = data;
            return true;
        } else {
            return false;
        }
    }

    public deleteEmployee(id: number): boolean {
        let employee: any = employees.filter(ele => ele.employeeId == id)[0];
        if (employee) {
            employees.splice(employees.indexOf(employee), 1);
            return true;
        } else {
            return false;
        }
    }
}

export default Service;