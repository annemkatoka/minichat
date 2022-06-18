class Sockets {

    constructor(io){
        this.io = io;

        this.socketEvents()
    }

    socketEvents(){
        this.io.on('connection', (socket) => { 
    
            socket.on('mensaje', ( data ) => {
                console.log(data);
                this.io.emit('mensaje-bienvenida', data);
            })
         });
    }
}

module.exports = Sockets;