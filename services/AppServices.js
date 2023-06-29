const { AppRepository } = require('../database')


class AppServices {

    constructor(){
        this.respository = new AppRepository();
    }

    async createApp(data){
        const { name, icon, url } = data;
        try {
            const data = await this.respository.addApps({name:name, icon:icon, url:url})
            return { name:data.name, icon:data.icon, url:data.url };
        }catch(err){
            throw Error('an error occured fetching user details!');
        }
    }

    async editApp(id){

        try {
            const data = await this.respository.findAppById({id:id})
            return data;
        }catch(err){ 
            throw Error('an error occured fetching user details!')
        }
    }

    async updateAppInfo(data){
        const { id, name } = data;
        try {
            await this.respository.updateApp({id:id, name:name})
        }catch(err){ console.log(err)
            throw Error('an error occured fetching user details!');
        }
    }

    async deleteApp(id){
        try {
            await this.respository.deleteApp({id:id})
        }catch(err){
            throw Error('an error occured fetching user details!');
        }
    }

    async viewAllApps(){
        try {
            const data = await this.respository.allApps();
            return data;
        }catch(err){ console.log(err)
            throw Error('an errror occureds')
        }
    }
}


module.exports = AppServices;