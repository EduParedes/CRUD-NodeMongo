const {Schema,model}  = require('mongoose')

const menuSchema = new Schema({
    starter:{type:String,required:true},
    mean:{type:String,required:true},
    dessert:{type:String,required:true},
    price:{type:Number},
    date: {type:Date,default:Date.now}
})

module.exports = model('Menu',menuSchema);





