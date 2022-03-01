require('dotenv/config');              //iporting the contents of dotenv file

const express = require('express');
const mongoose = require('mongoose');
const app = express();

//importing Routing system
const routes = require('./routes/routes');

app.use('/', routes)


// connecting with mongodb database
// by writing database connc=ection link in .env file and callin here

mongoose.connect(process.env.MONGO_URL,
    { useNewUrlParser: true, useUnifiedTopology: true }, err => {
        console.log('connected')
    });


// setting up the port

const port = process.env.PORT || '3000'
app.listen(port, err => {
    if (err)
        throw err
    console.log('Server listening on port', port)
})
    
