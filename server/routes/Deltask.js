const Todo = require('../Schema/Todolist')
const express = require('express')
const router = express.Router();

router.delete('/:id',async (req, res)=>{
  //console.log(req.params.id)
    try { 

        await Todo.findOneAndRemove({
            _id: req.params.id
        });
        return res.status(200).send('Task Deleted')
    } catch (err) {
        console.log(err)
    }
})
module.exports = router;