const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config();

const  connect =()=>{
    try {
        const res = mongoose.connect(process.env.MONGOOSE_URL)
        console.log(">>>>>>>>>>>>>>>CONNECT<<<<<<<<<<<<<<<")
    } catch (error) {
        console.error(500).json({message:error.message})
    }
}


module.exports = connect