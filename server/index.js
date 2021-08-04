const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();
dotenv.config();
const mongodb = "use your mongodb uri"
mongoose.connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log(`mongodb server is running `)).catch(err => console.log(err))

app.use(express.json({ extented: true }))
app.use(express.urlencoded({ extented: true }))
app.use(cors());

app.use('/ctask', require('./routes/Createtask'));
app.use('/etask', require('./routes/Edittask'));
app.use('/dtask', require('./routes/Deltask'));
app.use('/gdata', require('./routes/Fetchdata'));
const PORT = process.env.PORT || 6000;


app.listen(PORT, () => {
    console.log("express is running on " + PORT)
})