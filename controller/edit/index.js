const contactInfo = require("../../models/addressModel.js");

const editContact = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id);

        const editData = await contactInfo.findByIdAndUpdate(id, req.body, { new: true })

        console.log("updated");

        res.status(200).json({ editData })
    } catch (error) {
        console.log(error);
    }


}

module.exports = editContact