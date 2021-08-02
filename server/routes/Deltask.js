const Todo = require('../Schema/Todolist')
const express = require('express')
const router = express.Router();
const {  validationResult } = require('express-validator');

router.post('/',async (req, res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array()});
    }


    try {
       let todo = await Todo.findOne({
                    index: req.body.index
                });
                if (todo) {
                    //upadte
                    todo = await Todo.findOneAndDelete({
                        index: req.body.index
                    });
                    return res.send("delete");
                }
                else {
                    res.send("todo doest exit")
                }
    } catch (err) {
        console.log(err)
    }
})
module.exports = router;