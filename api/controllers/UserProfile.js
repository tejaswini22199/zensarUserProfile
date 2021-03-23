const express=require('express');
var router=express.Router();
var {UserProfile}=require('../models/UserProfile');
console.log(UserProfile);
router.get('/',(req,res)=>{
    UserProfile.find((err,docs)=>{
        if(!err)
        {
            res.send(docs);
        }
        else
        console.log('Error while retrieving users')
    })
})
router.post('/',(req,res)=>{
    var newUser=new UserProfile(
        {
            Image:req.body.Image,
            Name:req.body.Name
        }
    )
    newUser.save((err,docs)=>{
        if(!err)
        res.send(docs);
        else
        {
            console.log('Error while creating user');
        }
    })
})
module.exports=router;
