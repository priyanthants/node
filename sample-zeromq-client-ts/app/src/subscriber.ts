import zmq from "zeromq";
const subscriber = zmq.socket('sub')

class Subscriber {

  constructor() {
  }

  public connect(url:string) {
    // Connect to publisher.
    subscriber.connect(url)

    // Subscribe to all messages.
    subscriber.subscribe("");

    // Handle messages from the publisher.
    subscriber.on("message",  (notification)=> {
      //var msg = [];
      console.log(notification.toString());
    })

    //ports are closed
    process.on('SIGINT', ()=> {
      subscriber.close()
      console.log('\nClosed')
    })
  }
}

export default Subscriber;