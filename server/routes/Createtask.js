const Todo = require('../Schema/Todolist')
const express = require('express')
const router = express.Router();
const { check, validationResult } = require('express-validator');

router.post('/',async (req, res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array()});
    }
    // console.log(req.body)
    //res.send(req.body)
    try {
        const newtodo = new Todo({
            index: req.body.value.index,
            tname: req.body.value.Name,
            desc: req.body.value.Description
        })
        //console.log(newtodo)
        newtodo.save()
        return res.status(200).send('Task Created')
    } catch (err) {
        console.log(err)
    }
})

module.exports = router;