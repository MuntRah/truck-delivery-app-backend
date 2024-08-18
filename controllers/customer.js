const express = require('express');
const router = express.Router();
const Order = require('../models/order');

router.post('/orders', async (req, res) => {
    try {
        const order = await order.create(req.body)      
        await order.save();
        res.status(201).json(order);
    } catch (error) {
        res.status(400).json(error);
    }
});

router.get('/orders/:orderId', async (req, res) => {
    try {
        const order = await Order.findById(req.params.orderId);
        if (!order) 
          
          return
          (
          res.status(404).json({ error: 'order not found' })
        )
        res.send(order);
    } catch (error) {
        res.status(400).json(error);
    }
});

router.put('/orders/:orderId', async (req, res) => {
    try {
        const order = await Order.findByIdAndUpdate(req.params.orderId, req.body);
        if (!order) 
          return (
        
            res.status(404).json(error)
        
      )
        res.send(order);
    } catch (error) {
        res.status(400).json( error)
    }
});

router.delete('/orders/:orderId', async (req, res) => {
    try {
        const order = await Order.findByIdAndDelete(req.params.orderId);
        if (!order) 
          
          return (
            res.status(404).json({ error: 'order not found' })
          )
        else{
            res.send({ message: 'deleted' });
        }
       
    } catch (error) {
        res.status(400).json(error);
    }
});

router.get('/orders', async (req, res) => {
    try {
        const customerId = req.user._id;
        const orders = await Order.findById( customerId );
        if (orders.length === 0) 
          return (
            res.status(404).json(error)
        )

        res.send(orders);
    } catch (error) {
        res.status(400).json(error);
    }
});

module.exports = router;
