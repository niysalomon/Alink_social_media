const User = require("../models/User");
const router = require("express").Router();
const bcrypt = require("bcrypt");


//Update users
router.put("/:id",async(req,res)=>{
    if(req.body.userId === req.params.id || req.user.isAdmin){
        if(req.body.password){
            try {
            const salt= await bcrypt.genSalt(10)
            req.body.password = await bcrypt.hash(req.body.password,salt);
            }
            catch (err){
             return   res.status(500).json(err);
            }
        }
        try{
            const user = await User.findByIdAndUpdate(req.params.id, {$set: req.body,});
            res.status(200).json("User has updated!")
        }
        catch(err){ res.status(500).json(err)   
        }        
    }
    else {
      return  res.status(503).json("Update your account please!")
    }})
//delete users
router.delete("/:id", async(req,res)=>{
    if (req.body.userId === req.params.id || req.body.isAdmin){
    try{
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("user deleted");
} catch(err){
    res.status(500).json(err)
}}
else {
    res.status(500).json("Delete your account only!")}
});


//get users
router.get("/", async(req,res) =>{
    const userId = req.query.userId;
    const username = req.query.usarname;
    try{
    const user = userId ? await User.findById(userId) : await User.findOne({username : username});
    const {password,updatedAt, ...other} = user._doc;
    res.status(200).json(other);
    }
    catch(err){
        res.status(500).json(err);
    }
})
//follow users




router.put("/:id/follow", async(req,res) =>{
    if(req.body.userId !== req.params.id){  
        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if(!user.followers.includes(req.body.userId)){
                await user.updateOne({ $push:{followers:req.body.userId}});
                await currentUser.updateOne({ $push:{followings:req.params.id}});
                res.status(200).json("you start following user");
            }
            else {
                res.status(403).json("you already following this user");
            }   
        }
        catch(err){
            res.status(500).json(currentUser)
        }     
    }      
    else {
        res.status(403).json("you can't following yourself!")
    }
})
//unfollow users 
router.put("/:id/unfollow", async(req,res) =>{
    if(req.body.userId !== req.params.id){               
            const user = await User.findById(req.params.id);
            const currentUser= await User.findById(req.body.userId);
            if(user.followers.includes(req.body.userId)){
                await user.updateOne({ $pull:{followers:req.body.userId}});
                await currentUser.updateOne({ $pull:{followings:req.params.id}});
                res.status(200).json("you unfollowing this user");
            }
            else {
                res.status(403).json("you not following this user");
            }        
    }
    else {
        res.status(403).json("you can't unfollowing yourself!")
    }
})
module.exports = router