const mongoose = require("mongoose");
require("dotenv").config();

// Connect to MongoDB

const connectDb = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI),{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        }
        console.log("MongoDB is connected")
    }catch(err){
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectDb;