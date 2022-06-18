const express = require('express');
const http = require('http');
const io = require('socket.io');
const path = require('path');

const Sockets = require("./sockets");


class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        //Http Server
        this.server = http.createServer(this.app);

        //Configuraciones Sockets
        this.io = io( this.server, { /*Configuraciones*/ });
    }

    middlewares(){
        this.app.use(express.static( path.resolve(__dirname, '../public')));
    }

    configurarSockets(){
        new Sockets(this.io);
    }

    execute(){
        this.middlewares();

        this.configurarSockets();

        this.server.listen(this.port, () => {
            console.log("Pode vir quente que eu estoy fervendo...");
        });
    }
}



module.exports = Server;