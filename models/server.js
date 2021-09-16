require('dotenv').config();
const express = require('express');
const cors = require('cors')

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        //Middleware
        this.middlewares();

        //routes
        this.routes();
    }

    middlewares() {
        //CORS
        this.app.use(cors());

        // lectura y parseo  del body
        this.app.use(express.json());

        //Directorio publico
        this.app.use(express.static('public'))
    }

    routes() {
        this.app.use('/api/users', require('../routes/users'));

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Run Server Port: ${this.port}`)
        })
    }
}

module.exports = Server;