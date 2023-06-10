const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const db = require('./models/index');
const APIRoutes = require('./routes/index.js');
const {user} = require('./models/index.js');
// const user_repo = require('./repository/user-Repository');
const trans_repo = require('./repository/transaction-Repository');
// const user = new user_repo();
const trans = new trans_repo();


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
    // const res = await user.getByUsername({
    //     username : "ayushchopra",
    //     password : "Ayush_18feb2002"
    // }) 
    // console.log(res);
    // const res = await trans.getAllTransactionsOfUser(2);
    // console.log(res);
    // await user.destroy({
    //     where:{
    //         id : 1
    //     }
    // })
    })
}

prepareAndStartServer();