const express = require('express');
const router = express.Router();
const Order = require('../models/order');
const verifyToken = require("../middleware/verify-token");
const user = require('../models/user');
const customer = require('../models/customer');


router.post('/orders',verifyToken, async (req, res) => {
    try {
       const order = await Order.create({
        from: req.body.from,
        to:req.body.to,

        customer:req.user._id

       })
       console.log(user);
   
        
        res.status(201).json(order);
    } catch (error) {
        res.status(400).json({error});
    }
});

router.get('/orders',verifyToken, async (req, res) => {
    try {
        const orders = await Order.find({customer:req.user._id}); 
        res.send(orders);
    } catch (error) {
        res.status(400).json({error});
    }
});

router.get('/orders/:orderId', async (req, res) => {
    try {
        const { orderId } = req.params;
        const order = await Order.findById(orderId);
        if (!order) 
          return (res.status(404).json({ error: 'not found' }))
        res.json({ action: order.action, orderStatus: order.orderStatus });
    } catch (error) {
        res.status(400).json({ error: 'error' });
    }
});

router.get('/orders/customer/:customerId', async (req, res) => {
    try {
        const { customerId } = req.params;
        const orders = await Order.find({ customer: customerId });
        if (orders.length === 0) 
          return(  res.status(404).json({ error: 'not found' }))
    
        res.json(orders);
    } catch (error) {
        res.status(400).json({ error: 'error' });
    }
});

router.put('/orders/:orderId', async (req, res) => {
    try {
        const order = await Order.findByIdAndUpdate(req.params.orderId, req.body);
        if (!order) 
          return( res.status(404).json({ error: 'not found' }))
        res.status(order);
    } catch (error) {
        res.status(400).json({ error: 'error' });
    }
});

router.delete('/orders/:orderId', async (req, res) => {
    try {
        const order = await Order.findByIdAndDelete(req.params.orderId);
        if (!order) 

          return (res.status(404).json({ error: 'not Found' }))
        res.json({ message: 'deleted' });
    } catch (error) {
        res.status(400).json({ error: 'rrror' });
    }
});

module.exports = router;
