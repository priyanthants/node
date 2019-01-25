import express from 'express';

class App {
  public app: express.Application;
  public port = process.env.PORT || 3000;

  constructor() {
    this.app = express();
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