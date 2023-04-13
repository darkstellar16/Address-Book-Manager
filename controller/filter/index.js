const contactInfo = require("../../models/addressModel.js")

const filterData = async (req, res) => {

    const { name, mobile } = req.query;

    const queryObject = {};

    if (name) {
        queryObject.name = { $regex: name, $options: "i" };
    }
    if (mobile) {
        queryObject.mobile ={ $regex: mobile, $options: "i" };
    }
    try {
        const filteredData = await contactInfo.find(queryObject).sort("name");
        console.log("filtered");
        res.status(200).json({ filteredData });
    }
    catch (error) {
        console.log(error);
    }

}

module.exports = filterData