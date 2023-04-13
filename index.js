const express = require("express");

const bodyParser = require("body-parser")

const databaseConnection = require("./config/databse.js");    //database has been linked

databaseConnection();



const app = express();


app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());                          //for converting the data into JSON....

const mainRoute = require("./routes/index.js");     

app.use('/', mainRoute);


app.listen(5000, () => {
    console.log("Server is Up and Running");
})


