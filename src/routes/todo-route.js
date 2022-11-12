const router = require('express').Router()
const controller = require('../controllers/todo-controller')

router
.get('/', controller.getAllTodos)
.post('/', controller.createTodo)
.put('/:id', controller.updateTodo)
.delete('/:id', controller.deleteTodo)

module.exports = router