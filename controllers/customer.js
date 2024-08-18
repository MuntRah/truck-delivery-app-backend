const express = require('express');
const router = express.Router();
const Order = require('../models/order');

router.post('/orders', async (req, res) => {
    try {
        const { from, to, price } = req.body;
        const customerId = req.user._id;
        const order = new Order({ 
          from, 
          to, 
          price,
           customer: customerId });
        await order.save();
        res.status(201).send(order);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.get('/orders/:orderId', async (req, res) => {
    try {
        const order = await Order.findById(req.params.orderId);
        if (!order) 
          
          return
          (
          res.status(404).send({ error: 'order not found' })
        )
        res.send(order);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.put('/orders/:orderId', async (req, res) => {
    try {
        const order = await Order.findByIdAndUpdate(req.params.orderId, req.body);
        if (!order) 
          return (
        
            res.status(404).send(error)
        
      )
        res.send(order);
    } catch (error) {
        res.status(400).send( error)
    }
});

router.delete('/orders/:orderId', async (req, res) => {
    try {
        const order = await Order.findByIdAndDelete(req.params.orderId);
        if (!order) 
          
          return (
            res.status(404).send({ error: 'order not found' })
          )
        
        res.send({ message: 'deleted' });
    } catch (error) {
        res.status(400).send(error);
    }
});

router.get('/orders', async (req, res) => {
    try {
        const customerId = req.user._id;
        const orders = await Order.find({ customer: customerId });
        if (orders.length === 0) 
          return (
            res.status(404).send(error)
        )

        res.send(orders);
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;
