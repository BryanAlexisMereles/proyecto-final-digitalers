const mongoose = require('mongoose')

const dbConnection = async () => {

    try{
        await mongoose.connect(process.env.DB_REMOTE_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log('Base de datos conectada')
    }
    catch (error){
        console.error('Error al conectar la base de datos',error)
    }
}

module.exports = {
    dbConnection
}