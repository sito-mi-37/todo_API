const mongoose = require('mongoose')
const {config} = require('dotenv')

config()

const connect = async (uri) =>{
    try {
        mongoose.connect(uri || process.env.MONGO_DB_LOCAL, () =>{
            console.log('connected to database')
        })
    } catch (error) {
        console.log(error.message)
    }
    
}

module.exports = connect