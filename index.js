const { PORT_DEV } = require('./config')['dev'];
const { sequelize } = require('./database/dbConnection');
const app = require('./express-app');


// sequelize.sync().then(()=>console.log('DB connected!'))
// .catch(err=>console.log(err))
const startDB=async()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    }catch(err){
        console.log(err)
    }
}

startDB();


app.listen(PORT_DEV, ()=>{
    console.log('User is listening on port '+PORT_DEV);
})





