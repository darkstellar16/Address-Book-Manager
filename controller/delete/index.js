const contactInfo = require("../../models/addressModel.js");

const delContact = async (req, res) => {

    try {
        const id = req.params.id;
        const deletedData = await contactInfo.deleteOne({ _id: id })
        res.status(200).json({ deletedData })
    } catch (error) {
        console.log(error);
    }
}

module.exports = delContact