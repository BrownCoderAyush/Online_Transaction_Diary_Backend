const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const db = require('./models/index');
const APIRoutes = require('./routes/index.js');
const {user} = require('./models/index.js');


const PORT = 3000;

const prepareAndStartServer = ()=>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true})); 
    app.use('/api',APIRoutes);
    if(true){
        db.sequelize.sync({alter:false});
    }  

    app.listen(PORT ,async ()=>{
    console.log(`Server Started on Port : ${PORT}`);
    // await user.create({
    //     username : "blue",
    //     password : "Ayush" ,
    //     fullname : "Ayush Chopra"
    // });
    })
}

prepareAndStartServer();