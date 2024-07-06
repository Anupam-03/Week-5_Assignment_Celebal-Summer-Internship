const express  = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost/AlienDBex';

const app = express();

mongoose.connect(url, {useNewUrlParser:true});
const con = mongoose.connection;

con.on('open', function(){
    console.log("Connected...");
});

app.use(express.json());

const aliensRouter = require('./routes/aliens');
app.use('/aliens', aliensRouter);

app.listen(9000, () => {
    console.log('server started at 9000');
})