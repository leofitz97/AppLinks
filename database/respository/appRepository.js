const { Apps } = require('../models');
const {v4 : uuidv4} = require('uuid');

class AppRepository {

    async allApps() {
        try {
            const data = await Apps.findAll({attributes:['name', 'icon', 'url']});
            return data;
        } catch (err) {
            throw Error("an error occured fetching appps!");
        }
    }

    async addApps({ name, icon, url }) {
        try {
            const data = await Apps.create({
                name: name,
                icon: icon,
                url: url
            })
            return data;
        } catch (err) {
            console.log(err);
        }
    }

    async findAppById({ id }) {
        try {
            const app = await Apps.findByPk(id, { attributes: ['name', 'icon', 'url'] });
            if (app === null) {
                console.log('not found!');
            } else {
                return app;
            }
        } catch (err) { console.log(err)
            console.log(err);
        }
    }

    async updateApp({ id, name }) {
        try {
            await Apps.update({ name: name }, {
                where: {
                    id: id
                }
            })
        } catch (err) {
            console.log(err);
        }
    }

    async deleteApp({ id }) {
        try {
            await Apps.destroy({
                where: {
                    id: id
                }
            })
        } catch (err) {
            console.log(err);
        }
    }
}


module.exports = AppRepository;