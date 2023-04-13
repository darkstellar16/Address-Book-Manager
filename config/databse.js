const mongoose = require("mongoose");

const url = "mongodb+srv://shubham:piyush@cluster0.acpmp4s.mongodb.net/?retryWrites=true&w=majority";

const Connection = async () => {
    try {
        mongoose.connect(url, { useNewUrlParser: true })

        console.log("DataBase MongoDb Connected")

    } catch (error) {

        console.log(error);
    }
}


module.exports = Connection;