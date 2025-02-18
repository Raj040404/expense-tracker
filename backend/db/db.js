const mongoose = require('mongoose');
require('dotenv').config();  // Make sure dotenv is required before using env variables

const db = async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGO_URL, { 
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        });
        console.log('Db Connected');
    } catch (error) {
        console.error('DB Connection Error:', error.message); // Show the actual error message
    }
};

module.exports = { db };
