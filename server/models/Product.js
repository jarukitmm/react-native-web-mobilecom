const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name : String,
    quantity : {type:Number, default:1},
    cost : Number,
    subject : String,
    level:String,
    image : String,
    type : {type:[String]},
    description : String
})

module.exports = mongoose.model('Product',ProductSchema);