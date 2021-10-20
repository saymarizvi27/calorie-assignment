const http = require('http');
const app = require('./app');
const { mongoConnect } = require('./utility/mongo');

require('dotenv').config();

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);



async function startSever() {
    await mongoConnect();
    server.listen(PORT, () => {
        console.log(`Listening on PORT:${PORT}`)
    });
}

startSever();