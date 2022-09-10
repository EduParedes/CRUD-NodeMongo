require('dotenv').config();
const express = require('express');
const {engine} = require('express-handlebars');
const path = require('path');


//Initialize:
const app = express();
//require('./database');

//Settings:
app.set('port',process.env.PORT || 3000);
app.set('views',path.join(__dirname, 'views'));
app.set('view engine','.hbs')
app.engine('.hbs',engine({
  defaultLayout:'main',
  layoutsDir:path.join(__dirname,'views/layout'),
  partialsDir:path.join(__dirname,'views/partials'),
  extname:'.hbs'
}));

//Middleware:
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//Routes:
app.use(require('./routes/menu.routes'));

//404 page
app.get('*',(req,res)=>{
  res.render('404',{title:'Page not Found'})
})

module.exports = app;