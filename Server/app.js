const express = require('express');
const path = require('path');
//const mailgun = require('mailgun-js');
const mysql = require("mysql");
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const { ConnectionPolicyContext } = require('twilio/lib/rest/voice/v1/connectionPolicy');

dotenv.config({ path: './.env'});

const app = express();

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    port: process.env.PORT,
    user: process.env.DATABASE_USER, 
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));

//parse URL encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: false }));

// parse json bodies (as sent by API clients)
app.use(express.json());

app.use(cookieParser());

app.set('view engine', 'hbs');

db.connect( (error) => {
    if(error)
    {
        console.log(error)
    }
    else{
        console.log("MySql Connected...")
    }

})


// define routes

app.use('/', require('./Routes/pages'));
app.use('/auth', require('./Routes/auth'));


app.listen(5000, ()=> {
    console.log("Server started at Port 5000");
})