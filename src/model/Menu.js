const moongose = require("../database");

const mongoose = require('mongoose')
const {Schema,model} = mongoose;


const menuSchema = new Schema({
    sidedish:{type:String},
    starter:{type:String,required:true},
    starterDet:{type:String},
    mean:{type:String,required:true},
    meanDet:{type:String},
    dessert:{type:String,required:true},
    dessertDet:{type:String},
    price:{type:Number},
    date: {type:Date,default:Date.now}
})

module.exports = model('Menu',menuSchema);





