const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/taskRoutes')

const app = express();
const port = 3000;

app.use(express.json())

mongoose.connect('mongodb://localhost:27017/todo');
const db = mongoose.connection;
db.on('error' , () => console.log('Connection Error'))
db.once('open' , () => console.log('Connected BD'))

app.use(taskRoutes)

app.listen(port , () => console.log(`server started with port ${port}`))