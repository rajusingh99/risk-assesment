const mongoose = require('mongoose');

const ScenerioSchema = new mongoose.Schema({
    risk_scenario:{
        type:String,
        required:true,
    },
    risk_description:{
        type:String,
    },
    risk_field1:{
        type:String,
    },
    risk_field2:{
        type:String,
    },
    tags:{
        type:[String],
    },
    status:{
        type:Boolean,
    },
    save_as_draft:{
        type:Boolean,
    },
})

module.exports = mongoose.model('Scenerio',ScenerioSchema)