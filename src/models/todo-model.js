const {Schema, model} =require('mongoose')

const todoSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    description:{
        type: String,
        require: true
    }
}, {timestamps: true})

const Todos = model('Todos', todoSchema)

module.exports = Todos