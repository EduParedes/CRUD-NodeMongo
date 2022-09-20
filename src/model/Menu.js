const {Schema,model}  = require('mongoose')

const menuSchema = new Schema({
    starter:{type:String,required:true},
    main:{type:String,required:true},
    dessert:{type:String,required:true},
    image:{
        data:Buffer,
        contentType:String
    },
    price:{type:Number,required:true},
})

module.exports = model('Menu',menuSchema);





