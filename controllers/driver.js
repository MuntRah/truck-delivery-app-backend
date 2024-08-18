const express = require('express');
const router = express.Router();
const Order = require('../models/driver');
const verifyToken = require('../middleware/verify-token');
const user = require('../models/user');

router.get('/driver' , async (req,res)=>{
try{
const {action}= req.body;
if (action === "accepted") {
  await driver.save();
  res.status(200).send("accepted");
} else {
  res.status(200).send("rejected");
}
const driver = new Driver({
  action,
  driver: req.user._id 
});

if (action !== "accepted" && action !== "rejected") {
  return(res.status(400).send("invalid")) 
}

}
catch (error){
res.status(400).send(error)
}

})

