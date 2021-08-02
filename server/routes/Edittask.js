const Todo = require('../Schema/Todolist')
const express = require('express')
const router = express.Router();
const { check, validationResult } = require('express-validator');

router.post('/',async (req, res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array()});
    }

    
    const {
       tname,
       desc
    } = req.body;
    const todolist = {};
    
    
    if (tname) todolist.tname = tname;
    if (desc) todolist.desc = desc;



    try {
       let todo = await Todo.findOne({
                    index: req.body.index
                });
                if (todo) {
                    //upadte
                    todo = await Todo.findOneAndUpdate({
                        index: req.body.index
                    }, {
                        $set: todolist
                    }, {
                        new: true
                    });
                    return res.json(todo);
                }
    } catch (err) {
        console.log(err)
    }
})
module.exports = router;