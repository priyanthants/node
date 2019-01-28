import socketIo from 'socket.io';
import App from './App';
import { Message } from './message';

class Publisher {
    public io: SocketIO.Server;
    private app: App;

    constructor(app: App) {
        this.app = app;
        this.io = socketIo(this.app.server);
        this.startSocket();
    }

    public startSocket() {
        this.io.on('connect', this.listen());
    }


    public send(topic: string, messsage: Message) {
        console.log('sending %s', JSON.stringify(messsage));
        this.io.emit(topic, messsage);
    }

    listen = () => (socket: any) => {
        console.log('client %s Connected on port %s.', socket.id, this.app.port);

        socket.on('notify', (messsage: Message) => {
            console.log('receving request: %s', JSON.stringify(messsage));
            this.send(messsage.topic, messsage);
        });

        socket.on('disconnect', () => {
            console.log('Client %s disconnected', socket.id);
        });
    }

}

export default Publisher;