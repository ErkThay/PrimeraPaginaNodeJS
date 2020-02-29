const express = require("express");
const app = express();
const paht = require("path");

//settings 
app.set('port', 3000); 
app.set('views', paht.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

//middlewares

//routes
app.use(require('./routes/'));
//static files

//elistening the server 
app.listen(app.get('port'), ()=>{
    console.log("server on port ", app.get('port'));
});