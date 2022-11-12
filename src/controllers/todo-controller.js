const { triggerAsyncId } = require("async_hooks");
const Todos = require("../models/todo-model");

// get all todos

exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todos.find({});
    if (todos.length === 0) {
       return res.status(404).json({
        message: "Todo list is empty"
      });
    }
    res.status(200).json({
      message: " all todos",
      todos
    });
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
      error: error.message
    });
  }
};

// create todo

exports.createTodo = async (req, res) => {
  try {
    const { title, description } = await req.body;
    const newTodo = {
      title,
      description,
    };
    const _todo = await Todos.create(newTodo);
    if (!_todo) {
      return res.status(400).json({
        message: "Unable to create todo",
      });
    }
    res.status(200).json({
      message: "todo created successfully",
      _todo,
    });
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
      error: error.message,
    });
  }
};

// update todo

exports.updateTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, description } = await req.body;
    const edit = { title, description };
    const todo = await Todos.findOneAndUpdate(id, edit, { new: true });
    if (!todo) {
      return res.status(404).json({
        message: "no todo matches that id",
      });
    }
    res.status(200).json({
      message: "todo updated successfully",
      todo,
    });
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
      error: error.message,
    });
  }
};

// delete todo

exports.deleteTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedTodo = await Todos.findOneAndDelete(id);
    if (!deletedTodo) {
      return res.status(404).json({
        message: "No todo with that id",
      });
    }
    res.status(200).json({
        message: "todo deleted successfully"
    })
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
      error: error.message,
    });
  }
};
