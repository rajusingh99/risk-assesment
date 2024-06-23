require('dotenv').config();
const mongoose = require("mongoose");

const connectDb =async()=>{
   return await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Something went wrong during MongoDB connection!'))
    .catch(err => console.log(err));
}

module.exports ={connectDb}