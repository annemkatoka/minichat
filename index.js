const Server = require("./models/server");
require('dotenv').config();

const server = new Server;

server.execute();

/*app.use(express.static( __dirname + '/public'));
*/
