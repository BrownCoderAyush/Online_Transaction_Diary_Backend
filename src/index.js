const express = require('express');
const bodyParser = require('body-parser');

const db = require('./models/index');
const app = express();

const PORT = 3000;

const prepareAndStartServer = ()=>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true})); 

    if(true){
        db.sequelize.sync({alter:false});
    }  

    app.listen(PORT ,async ()=>{
    console.log(`Server Started on Port : ${PORT}`);
    })
}

prepareAndStartServer();