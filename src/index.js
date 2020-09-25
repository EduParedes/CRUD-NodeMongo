const app = require('./app');

// Start Server:
app.listen(app.get('port'),()=>{
    console.log(`Server on Port ${app.get('port')}`);
});