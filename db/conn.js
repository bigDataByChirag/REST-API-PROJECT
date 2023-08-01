const mongoose = require("mongoose");
const CONNECTION_STRING = "mongodb+srv://chirag:chirag@chiragcluster.p8viumh.mongodb.net/rest-api-backend?retryWrites=true&w=majority"

const connectDb = async () => {
    try {
        const connect = await mongoose.connect(CONNECTION_STRING);
        console.log(
            "Database connected: ", 
            connect.connection.host, 
            connect.connection.name );
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

module.exports = connectDb;
