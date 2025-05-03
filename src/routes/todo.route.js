
const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todo.controller');

// Get all todos
router.get('/todos', todoController.getTodos);

// Create a new todo
router.post('/todos', todoController.createTodo);

// Update a todo
router.put('/todos/:id', todoController.updateTodo);

// Update the status of a todo
router.patch('/todos/:id/status', todoController.updateStatus);

// Delete a todo
router.delete('/todos/:id', todoController.deleteTodo);

module.exports = router;
