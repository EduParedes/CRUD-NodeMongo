const express = require('express');
require('./database')

//Initialize:
const app = express();

//Settings:
app.set('port',process.env.PORT || 3000);

//Middleware:
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//Routes:
app.use('/api/menus',require('./routes/menu.route'));

module.exports = app;