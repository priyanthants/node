import express from 'express';
import bodyParser from 'body-parser';
import Controller from "./controller";
import Publisher from './Publisher';
import { createServer, Server } from 'http';

class App {
  public app: express.Application;
  public server: Server;
  public port = process.env.PORT || 3000;
  public controller: Controller;
  public publisher: Publisher;

  constructor() {
    this.app = express();
    this.server = this.getServer();
    this.publisher = new Publisher(this);
    this.controller = new Controller(this.publisher);
    this.initializeControllers();

  }

  private getServer(): Server {
    this.app.use(bodyParser.json());
    return createServer(this.app);
  }

  private initializeControllers() {
    this.app.use('/', this.controller.router);
  }

  public listen(port: number) {
    this.port = port;
    this.server.listen(this.port, () => {
      console.log('Running server on port %s', this.port);
    });
  }
}

export default App;