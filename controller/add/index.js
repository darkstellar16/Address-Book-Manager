
const contactInfo = require("../../models/addressModel.js")


const addData = async (req, res) => {

    try {

        const info = await contactInfo.create({ name: req.body.name,
             mobile: req.body.mobile })

        info.save();
        res.status(200).json({
            message: "Added Successfully"
        })

    } catch (error) {

        console.log(error);

    }
}


module.exports = addData;