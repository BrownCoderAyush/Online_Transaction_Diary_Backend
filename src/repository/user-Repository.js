const {user} = require('../models/index');



class UserRepository{
    constructor(){

    }
    async create(data) {
        try {
            const User = await user.create({
                username: data.username,
                password: data.password,
                fullname: data.fullname
            });
           
            return User;
           
        } catch (error) {
            console.log("Something went wrong on repository layer");
            throw error;
        }
    }


    async getByUsername({username}){
        try {
            const User = await user.findOne({
                where:{
                    username
                }
            });
            return User.dataValues;
        } catch (error) {
            console.log("Something went wrong on repository layer");
            throw error;
        }
    }
 
    async getById(id){
        try {
            const User = await user.findByPk(id);
            return User;
        } catch (error) {
            console.log("Something went wrong on repository layer");
            throw error;
        }
    }
    
}

module.exports = UserRepository;