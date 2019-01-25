import express from "express";
const app: express.Application = express();
const router: express.Router = express.Router();

const port: number = 3000;

const server = app.listen(port, (err: any) => {
  if (err) {
    return console.log(err)
  }
  return console.log(`server is listening on ${port}`)
})

app.get('/', (request: express.Request, response: express.Response) => {
  response.send("Hello World");
});