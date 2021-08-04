const Todo = require('../Schema/Todolist')
const express = require('express')
const router = express.Router();
const { check, validationResult } = require('express-validator');

router.put('/',async (req, res)=>{
    
    try {      
                if (req.body.value.id) {
                    console.log(req.body.value.id);
                    todo = await Todo.findByIdAndUpdate({
                        _id: req.body.value.id
                    }, {
                            index: req.body.value.index,
                            tname: req.body.value.Name,
                            desc: req.body.value.Description
                    }, {
                        new: true
                    });
                    return res.status(200).send('Task Edited')
                }
    } catch (err) {
        console.log(err)
    }
})
module.exports = router;