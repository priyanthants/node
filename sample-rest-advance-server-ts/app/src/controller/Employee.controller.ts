import * as express from 'express';
import EmployeeServiceImpl from '../service/EmployeeServiceImpl';
import EmployeeService from '../service/EmployeeService';
import Employee from '../model/Employee';
 
class EmployeeController{
    public path = '/employee';
    public router = express.Router();
    public employeeService:EmployeeService;
   
    constructor() {
        this.employeeService=new EmployeeServiceImpl();
        this.intializeRoutes();
    }
   
    public intializeRoutes() {
      this.router.get(this.path, this.getAllEmployees);
      this.router.get(this.path+"/:id", this.getOneEmployee);
      this.router.post(this.path, this.createAEmployee);
      this.router.put(this.path+"/:id", this.updateAEmployee);
      this.router.delete(this.path+"/:id",this.deleteEmployee);
    }
   
    getAllEmployees = (request: express.Request, response: express.Response) => {
      response.send(this.employeeService.findAll());
    }
   
    getOneEmployee = (request: express.Request, response: express.Response) => {
      response.send(this.employeeService.findOne(request.params.id));
    }

    deleteEmployee = (request: express.Request, response: express.Response) => {
      response.send(this.employeeService.delete(request.params.id));
    }

    createAEmployee = (request: express.Request, response: express.Response) => {
      const employee: Employee = request.body;
      response.send(this.employeeService.create(employee));
    }

    updateAEmployee = (request: express.Request, response: express.Response) => {
      const employee: Employee = request.body;
      response.send(this.employeeService.update(request.params.id,employee));
    }
}

export default EmployeeController;