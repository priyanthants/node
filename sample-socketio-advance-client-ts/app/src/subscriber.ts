import SocketIO from 'socket.io-client';
import { Message } from './message';

class Subscriber {
    public socket: SocketIOClient.Socket;

    constructor(serverUrl: string, userId: number) {
        this.socket = SocketIO(serverUrl);
        this.intiate(userId);
        this.observe("notification");
    }

    public intiate(userId: number): void {
        this.socket.emit("intiate", userId);
    }

    public send(message: Message): void {
        console.log("sending : %s",JSON.stringify(message));
        this.socket.emit("notify", message);
    }

    public observe(topic: string): void {
        this.socket.on(topic, (message: Message) => console.log("receiving : %s",JSON.stringify(message)));
    }

}

export default Subscriber;