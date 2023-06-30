const { Users } = require('../models');


class UserRepository {

    async allUsers(){
        try {
            const data = await Users.findAll({attributes:['name', 'email']})
            return data;
        }catch(err){
            throw Error("an error occured trying to fetch all users info!")
        }
    }

    async createUser({ name, email, password }){
        try {
            const data = await Users.create({
                name: name,
                email: email,
                password: password
            })
            return data;
        }catch(err){
            console.log(err);
        }
    }

    async findUserById({ id }){
        try {
            console.log(id)
            const user = await Users.findByPk(id, {attributes:['name', 'email']});
            if (user === null){
                console.log('not found!');
            }else{
                return user;
            }
        }catch(err){
            console.log(err);
        }
    }

    async findUser({ email }){
        try {
            const user = await Users.findOne({
                where: {
                    email:email
                }
            });
            if (user === null){
                console.log('not found!');
            }else{
                return user;
            }
        }catch(err){
            console.log(err);
        }
    }

    async updateUser({ id, name }){
        try {
            await Users.update({ name:name}, {
                where: {
                    id:id
                }
            })
        }catch(err){
            console.log(err);
        }
    }

    async deleteUser({ id }){
        try {
            await Users.destroy({
                where: {
                    id: id
                }
            })
        }catch(err){
            console.log(err);
        }
    }  

}

module.exports = UserRepository;