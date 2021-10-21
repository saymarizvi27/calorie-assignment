const http = require('http');
const app = require('./app');
const { mongoConnect } = require('./utility/mongo');
const { redisConnect } = require('./utility/redis');

require('dotenv').config();

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);



async function startSever() {
    await mongoConnect();
    await redisConnect();
    server.listen(PORT, () => {
        console.log(`Listening on PORT:${PORT}`)
    });
}

startSever();