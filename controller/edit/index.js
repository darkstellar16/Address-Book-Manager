const contactInfo = require("../../models/addressModel.js");

const editContact = async (req, res) => {
    try {
        const id = req.params.id;                    //searched the id from the url parameter which has to be deleted from database...
        console.log(id);

        const editData = await contactInfo.findByIdAndUpdate(id, req.body, { new: true })    //deleted the id.....

        console.log("updated");

        res.status(200).json({ editData })  //send the response back from the server
    } catch (error) {
        console.log(error);
    }


}

module.exports = editContact