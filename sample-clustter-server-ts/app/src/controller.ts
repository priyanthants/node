import * as express from 'express';

class Controller {
    public path = '/';
    public router = express.Router();

    constructor() {
        this.intializeRoutes();
    }

    public intializeRoutes() {
        this.router.get(this.path, this.helloworld);
        this.router.get(this.path + "welcome", this.welcome);
    }

    welcome = (request: express.Request, response: express.Response) => {
        console.log("request handle by worker",process.pid);
        response.send("WelCome!");
    }

    helloworld = (request: express.Request, response: express.Response) => {
        console.log("request handle by worker",process.pid);
        response.send("HelloWorld!");
    }

    
}

export default Controller;