const app = require('express')();
const mongoose = require('mongoose');
const requireDir = require('require-dir');


const  dbConfig = require('./config/database');


mongoose.connect( dbConfig.url,{ useNewUrlParser:true , useUnifiedTopology: true});

requireDir(dbConfig.modelsPath);


//test db create- Ok
// const User = mongoose.model('User');
// console.log(User);
// User.create({
//     name:'Victor',
//     username:'vwso',
//     email:'wilkersantos125@gmail.com',
//     password:'teste123'
//     }, () => {
//         console.log('OK');
//     }
// );

app.listen(3000);
