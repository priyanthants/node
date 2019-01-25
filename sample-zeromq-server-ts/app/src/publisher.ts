import zmq from "zeromq";
const publisher= zmq.socket('pub');

class Publisher {

  constructor() { 
  }

  public bind(port:number) {
    publisher.bind(`tcp://*:${port}`,  (err: any)=> {
      if (err)
        console.log(err)
      else
        console.log(`ZeroMq is listening on ${port}...`);
    })
  }

  public send(message:string):void{
    console.log("sending message");
    publisher.send(message);
  }
}

export default Publisher;