require('./db')
const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
var UserRoutes=require('./controllers/UserProfile');
var app=express();
app.use(bodyParser.json());
const port=5000;

app.listen(port,()=>console.log(`Server started at port ${port}`))
app.use('/users',UserRoutes);