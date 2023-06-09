const User = require('../models/user.js');



class UserRepository{
    constructor(){

    }
    async signUp(data) {
        try {

            const user = await User.create({
                username: data.username,
                password: data.password,
                fullname: data.fullname
            });
           
            return user;
           
        } catch (error) {
            console.log("Something went wrong on repository layer");
            throw {error};
        }
    }

 
    
}

module.exports = UserRepository;