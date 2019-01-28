import * as express from 'express';
import Publisher from './Publisher';
import { Message } from './message';

class Controller {
    public path = '/notify';
    public router = express.Router();
    public publisher: Publisher;

    constructor(publisher: Publisher) {
        this.publisher = publisher;
        this.intializeRoutes();
    }

    public intializeRoutes() {
        this.router.post(this.path, this.notification);
    }

    notification = (request: express.Request, response: express.Response) => {
       /*  let message: Message = {
            topic: "notification",
            message: "pub to sub"
        } */
        let message:Message=request.body;
        console.log("requesting : %s",JSON.stringify(message));
        this.publisher.send(message.topic, message);
        response.send("message send to subscribers");

    }



}

export default Controller;