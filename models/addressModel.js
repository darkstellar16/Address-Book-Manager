const mongoose = require("mongoose");          //mongoose has been required


const contactSchema = new mongoose.Schema(                     //creating a mongoose schema which will be in the database....
    {
        name: {
            type: String,
            required: true,
            minlenght:1
        },
        mobile: {
            type: String,
            required: true,
            minlenght: 10,
            maxlength: 10,
            unique: true
        }
    }
)

const contactInfo = mongoose.model("contact", contactSchema);  //Created Contact Model....

module.exports = contactInfo;                                  // exporting the contactInfo to be used in controller function...