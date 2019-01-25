import * as express from 'express';

let employees: any[] = [{ employeeId: 1, employeeName: 'john' }];

class Controller {
    public path = '/employee';
    public router = express.Router();

    constructor() {
        this.intializeRoutes();
    }

    public intializeRoutes() {
        this.router.get(this.path, this.getAllEmployees);
        this.router.get(this.path + "/:id", this.getOneEmployee);
        this.router.post(this.path, this.createAEmployee);
        this.router.put(this.path + "/:id", this.updateAEmployee);
        this.router.delete(this.path + "/:id", this.deleteEmployee);
    }

    getAllEmployees = (request: express.Request, response: express.Response) => {
        response.send(employees);
    }

    getOneEmployee = (request: express.Request, response: express.Response) => {
        let id: number = request.params.id;
        let employee: any = employees.filter(ele => ele.employeeId == id)[0];
        if (employee) {
            response.send(employee);
        } else {
            response.send("Employee not Found.");
        }
    }

    deleteEmployee = (request: express.Request, response: express.Response) => {
        let id: number = request.params.id;
        let employee: any = employees.filter(ele => ele.employeeId == id)[0];
        if (employee) {
            employees.splice(employees.indexOf(employee), 1);
            response.send(true);
        } else {
            response.send(false);
        }
    }

    createAEmployee = (request: express.Request, response: express.Response) => {
        const employee: any = request.body;
        employee.employeeId = employees.length + 1;
        employees.push(employee);
        response.send(employee);
    }

    updateAEmployee = (request: express.Request, response: express.Response) => {
        let id: number = request.params.id;
        const data: any = request.body;
        let employee: any = employees.filter(ele => ele.employeeId == id)[0];
        if (employee) {
            data.employeeId = employee.employeeId;
            employees[employees.indexOf(employee)] = data;
            response.send(true);
        }
        response.send(false);
    }
}

export default Controller;