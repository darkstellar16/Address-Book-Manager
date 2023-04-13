const contactInfo = require("../../models/addressModel.js");

const delContact = async (req, res) => {

    try {
        const id = req.params.id;
        await contactInfo.deleteOne({ _id: id })

    } catch (error) {
        console.log(error);
    }
    res.status(200).json({
        message: "Contact deleted"
    })
}


module.exports = delContact