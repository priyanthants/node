import express from 'express';
import bodyParser from 'body-parser';
import EmployeeController from "./controller/Employee.controller";

class App {
  public app: express.Application;
  public port = process.env.PORT || 3000;
  public employeeController: EmployeeController;

  constructor() {
    this.app = express();
    this.app.use(bodyParser.json());
    this.employeeController = new EmployeeController();
    this.initializeControllers();
  }

  private initializeControllers() {
    this.app.use('/', this.employeeController.router);
  }

  public listen() {
    this.app.listen(this.port, (err: any) => {
      if (err) {
        return console.log(err)
      }
      return console.log(`server is listening on ${this.port}`)
    })
  }
}

export default App;