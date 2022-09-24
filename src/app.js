require('dotenv').config();
const express = require('express');
const {engine} = require('express-handlebars');
const path = require('path');
const methodOverride = require('method-override');
const flash = require('connect-flash');
const session = require('express-session');

//Initialize:
const app = express();
require('./database');

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
app.use(methodOverride('_method'));
app.use(flash());
app.use(session({
  secret:'secret',
  resave:true,
  saveUninitialized:true
}))


//Global variables
app.use((req,res,next)=>{
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  next();
})

//Routes:
app.use(require('./routes/menu.routes'));

//404 page
app.get('*',(req,res)=>{
  res.render('404',{title:'Page not Found'})
})

// Static Files
app.use(express.static(path.join(__dirname,'public')))

module.exports = app;