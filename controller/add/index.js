
const contactInfo = require("../../models/addressModel.js")


const addData = async (req, res) => {

    try {

        const info = await contactInfo.create({
            name: req.body.name,      //data is created in the databse
            mobile: req.body.mobile
        })

        info.save();                                                      // data is saved in the database
        res.status(200).json({ info })

    } catch (error) {

        console.log(error);

    }
}

module.exports = addData;