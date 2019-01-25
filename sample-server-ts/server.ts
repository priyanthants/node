import express from "express";
const app: express.Application = express();

const port: number = 3000;


const server = app.listen(port, (err: any) => {
  if (err) {
    return console.log(err)
  }
  return console.log(`server is listening on ${port}`)
})
