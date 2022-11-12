const express = require('express')
const {json} = require('express')
const router = require('./routes/todo-route')

const connect = require('./config/database')

connect("mongodb+srv://sito:sito123456@cluster0.0pjte.mongodb.net/?retryWrites=true&w=majority")


const app = express()
const port = process.env.PORT || 3000

app.use(json())
app.use('/todo', router)

app.listen(port, () => console.log(`listening on port ${port}` ))
