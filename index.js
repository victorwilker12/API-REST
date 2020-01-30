const app = require('express')();
const mongoose = require('mongoose');

const  dbConfig = require('./config/database');


mongoose.connect( dbConfig.url,{ useNewUrlParser:true , useUnifiedTopology: true});


app.listen(3000);
