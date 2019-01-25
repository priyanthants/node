import * as express from 'express';
import Publisher from './Publisher';

class Controller {
    public path = '/';
    public router = express.Router();
    public publisher:Publisher;

    constructor() {
        this.publisher=new Publisher();
        this.intializeRoutes();
    }

    public intializeRoutes() {
        this.router.get(this.path, this.welcome);
    }

    welcome = (request: express.Request, response: express.Response) => {
        this.publisher.send("WelCome!");
        response.send("message send to subscribers");
    }


    
}

export default Controller;