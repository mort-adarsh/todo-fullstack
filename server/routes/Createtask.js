const Todo = require('../Schema/Todolist')
const express = require('express')
const router = express.Router();
const { check, validationResult } = require('express-validator');

router.post('/',async (req, res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array()});
    }
    //res.send(req.body)
    try {
        const newtodo = new Todo({
            index: req.body.index,
            tname: req.body.tname,
            desc: req.body.desc
        })
        console.log(newtodo)
        const todo = newtodo.save()
        res.json(todo);
    } catch (err) {
        console.log(err)
    }
})
module.exports = router;