import express from 'express';
import bodyParser from 'body-parser';
import Subscriber from './subscriber';
import { createServer, Server } from 'http';
import Controller from './controller';

class App {
  public app: express.Application;
  public server: Server;
  public port = process.env.PORT || 3001;
  public subscriber: Subscriber;
  public controller: Controller;


  constructor(pubUrl: string) {
    this.app = express();
    this.server = this.getServer();
    this.subscriber = this.subscribe(pubUrl);
    this.controller = new Controller(this.subscriber);
    this.initializeControllers();
  }

  private getServer(): Server {
    this.app.use(bodyParser.json());
    return createServer(this.app);
  }

  public listen(port: number) {
    this.port = port;
    this.server.listen(this.port, () => {
      console.log('Running server on port %s', this.port);
    });
  }

  private initializeControllers() {
    this.app.use('/', this.controller.router);
  }

  public subscribe(pubUrl: string): Subscriber {
    return new Subscriber(pubUrl);
  }


}

export default App;