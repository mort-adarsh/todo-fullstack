const Todo = require('../Schema/Todolist')
const express = require('express')
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const todo = await Todo.find();
        res.json(todo)
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
})

module.exports = router;