const mongoose = require('../connection');

const schema = new mongoose.Schema({
    title : String,
    description :String,
    category : String,
    thumbnail : String,
    email : String,
    password: String,
    company : String,
    createdAt: {type:Date, default: new Date()}
})

const model= mongoose.model("companies",schema);

module.exports=model;