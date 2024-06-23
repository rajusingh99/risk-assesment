require('dotenv').config();
const mongoose = require("mongoose");

const connectDb =async()=>{
   return await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDb Connection successfully established!'))
    .catch(err => {
        console.log(err);
        console.log('Something went wrong during MongoDB connections!');
    });
}

module.exports ={connectDb}