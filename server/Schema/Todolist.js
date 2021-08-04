const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    index : {
        type: Number,
        
    },
    tname: {
        type:String,
        required: true
    },
    desc: {
        type:String,
    }

})

module.exports = Todo = mongoose.model('Todo', TodoSchema);