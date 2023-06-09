const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const db = require('./models/index');
const APIRoutes = require('./routes/index.js');
const {PORT} = require('./config/serverConfig.js');



const prepareAndStartServer = ()=>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true})); 
    app.use('/api',APIRoutes);
    if(true){
        db.sequelize.sync({alter:false});
    }  

    app.listen(PORT ,async ()=>{
    console.log(`Server Started on Port : ${PORT}`);
    })
}

prepareAndStartServer();