const mongoose = require('mongoose');

require('dotenv').config();

mongoose.connection.once('open', () => {
    console.log('MongoDB connection is ready');
})

async function mongoConnect() {
    try {
        await mongoose.connect(process.env.MONGO_URL.toString(), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    } catch {
        throw new Error('Error connecting the database');
    }
}


async function mongoDisconnect() {
    await mongoose.connection.close(true);
}

module.exports = {
    mongoConnect,
    mongoDisconnect
}