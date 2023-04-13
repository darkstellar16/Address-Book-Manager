const contactInfo = require("../../models/addressModel.js")

const filterData = async (req, res) => {

    const { name, mobile } = req.query;       //created query for name and mobile fields

    const queryObject = {};

    if (name) {
        queryObject.name = { $regex: name, $options: "i" };     // name has been quered
    }
    if (mobile) {
        queryObject.mobile = { $regex: mobile, $options: "i" };   //mobile number has been quered
    }
    try {
        const filteredData = await contactInfo.find(queryObject).sort("name");   //here name has been sorted in ascending order and thr queryObject will searched the entered query..
        console.log("filtered");
        res.status(200).json({ filteredData });       //response has been send from the server
    }
    catch (error) {
        console.log(error);
    }

}

module.exports = filterData