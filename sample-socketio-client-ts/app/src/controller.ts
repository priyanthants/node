import * as express from 'express';
import Subscriber from './subscriber';
import { Message } from './message';

class Controller {
    public path = '/notify';
    public router = express.Router();
    public subscriber: Subscriber;

    constructor(subscriber: Subscriber) {
        this.subscriber = subscriber;
        this.intializeRoutes();
    }

    public intializeRoutes() {
        this.router.post(this.path, this.notification);
    }

    notification = (request: express.Request, response: express.Response) => {
        let message:Message=request.body;
        console.log("requesting : %s",JSON.stringify(message));
        this.subscriber.send(message);
        response.send("message send to publisher");

    }
}

export default Controller;