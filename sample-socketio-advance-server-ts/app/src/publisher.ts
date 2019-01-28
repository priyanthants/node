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

    public sendDefaultMessage() {
        //this.send('message',"Hai");
    }

    public send(topic: string, messsage: Message) {
        console.log('sending %s', JSON.stringify(messsage));
        this.io.to(messsage.to).emit(topic, messsage);
    }

    listen = () => (socket: any) => {
        console.log('client %s Connected on port %s.', socket.id, this.app.port);

        socket.on('intiate', (id: number) => {
            socket.join(id);
            //console.log("ids " + JSON.stringify(this.io.sockets.adapter.rooms[id]));
            //console.log("clients:" + JSON.stringify(this.io.sockets.adapter.rooms));
        });

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