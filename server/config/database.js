require('dotenv').config();

const mongoose = require('mongoose');

const dbConnect = async() =>{
    try{
        await mongoose.connect(process.env.MONGO_URI, {});
        console.log('DB connected Successfully');
    }
    catch(error)
    {
        console.error('DB connection error:',error.messages);
        process.exit(1);
    }
};

module.exports = dbConnect;