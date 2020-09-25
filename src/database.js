const mongoose = require('mongoose');
const config = require('./config')
const URI = config.URI;

mongoose.connect(URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(db=>console.log('DB is connected'))
    .catch(err=>console.log(err))

module.exports = mongoose;