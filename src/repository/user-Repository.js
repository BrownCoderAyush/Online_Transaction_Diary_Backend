const {user} = require('../models/index');



class UserRepository{
    constructor(){

    }
    async signUp(data) {
        try {
        
            const User = await user.create({
                username: data.username,
                password: data.password,
                fullname: data.fullname
            });
           
            return User;
           
        } catch (error) {
            console.log("Something went wrong on repository layer");
            throw {error};
        }
    }

 
    
}

module.exports = UserRepository;