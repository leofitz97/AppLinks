const { UserRepository } = require('../database');
const { ValidatePassword, GeneratePassword, GenerateSalt, GenerateSignature } = require('../utils');


class UserServices {

    constructor(){
        this.respository = new UserRepository();
    }

    async SignIn(data){
        
        const { email, password } = data;
        try {
            const foundUser = await this.respository.findUser({ email: email});
            if (foundUser){
                const validPassword = await ValidatePassword(password, foundUser.password);
                if (validPassword){
                    const token = GenerateSignature({id:foundUser.id, email: foundUser.email, role:foundUser.role});
                    return { token:token, data:foundUser };
                }
            }
        }catch(err){
            throw new Error('somthing bad has happened!')
        }
    }

    async SignUp(data){
        
        const { name, email, password } = data;

        try {
            let salt = await GenerateSalt();
            let userPassword = await GeneratePassword(password, salt);
            const user = await this.respository.createUser({name:name, email:email, password:userPassword});
            const token = await GenerateSignature({ email: email, id: user.id});
            return token;
        }catch(err){
            throw new Error('something bad has happened!');
        }
    }
    
    async viewAllUsers(){
        
        try {
            const data = await this.respository.allUsers();
            return data;
        }catch(err){
            throw Error('an errror occureds')
        }
    }

    async userDetails(id){

        try {
            const data = await this.respository.findUserById({id:id})
            return data;
        }catch(err){
            throw Error('an error occured fetching user details!')
        }
    }

    async updateUserInfo(data){
        const { id, name } = data;
        try {
            await this.respository.updateUser({id:id, name:name})
        }catch(err){
            throw Error('an error occured fetching user details!');
        }
    }

    
}



module.exports = UserServices;