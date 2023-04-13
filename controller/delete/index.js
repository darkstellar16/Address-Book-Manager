const contactInfo = require("../../models/addressModel.js");

const delContact = async (req, res) => {

    try {
        const id = req.params.id;                                   //searched the id to be delted from the url parameter
        const deletedData = await contactInfo.deleteOne({ _id: id }) //matched the id with the backend id and deleted the data of that id
        res.status(200).json({ deletedData })                         //send the response back
    } catch (error) {
        console.log(error);
    }
}

module.exports = delContact