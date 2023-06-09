const userRepositroy = require("../repository/user-Repository.js");


class UserService{
    constructor(){
        this.UserRepositroy = new userRepositroy();
    }
    async signUp(data){
        try {
            const userData = await this.UserRepositroy.signUp(data);
            return userData;     
        } catch (error) {
            console.log("something went wrong in the service layer");
            throw {error};
        }
        
    }  
    
}

module.exports=UserService;