// testConnection.js

const mongoose = require("mongoose");

const MONGO_URI = "mongodb+srv://url_shorter:uhjRQAm2dcBnfoyP@cluster0.2gk66hd.mongodb.net/urlshorter_db?retryWrites=true&w=majority";

async function testConnection() {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("✅ MongoDB Connected Successfully");
        
        // Optional: check DB name
        console.log("Database:", mongoose.connection.name);

        process.exit(0);
    } catch (error) {
        console.error("❌ Connection Error:");
        console.error(error.message);
        process.exit(1);
    }
}

testConnection();