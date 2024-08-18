const express = require('express');
const router = express.Router();
const Order = require('../models/order');

router.post('/orders', async (req, res) => {
    try {
        const { from, to, price } = req.body;
        const order = new Order({
            from,
            to,
            price,
            customer: req.user._id, 
        });
        await order.save();
        res.status(201).send(order);
    } catch (error) {
        res.status(400).send({ error: 'error' });
    }
});

router.get('/orders', async (req, res) => {
    try {
        const orders = await Order.find(); 
        res.send(orders);
    } catch (error) {
        res.status(400).send({ error: 'error' });
    }
});

router.get('/orders/:orderId/status', async (req, res) => {
    try {
        const { orderId } = req.params;
        const order = await Order.findById(orderId);
        if (!order) 
          return (res.status(404).send({ error: 'not found' }))
        res.send({ action: order.action, orderStatus: order.orderStatus });
    } catch (error) {
        res.status(400).send({ error: 'error' });
    }
});

router.get('/orders/customer/:customerId', async (req, res) => {
    try {
        const { customerId } = req.params;
        const orders = await Order.find({ customer: customerId });
        if (orders.length === 0) 
          return(  res.status(404).send({ error: 'not found' }))
    
        res.send(orders);
    } catch (error) {
        res.status(400).send({ error: 'error' });
    }
});

router.put('/orders/:orderId', async (req, res) => {
    try {
        const order = await Order.findByIdAndUpdate(req.params.orderId, req.body);
        if (!order) 
          return( res.status(404).send({ error: 'not found' }))
        res.send(order);
    } catch (error) {
        res.status(400).send({ error: 'error' });
    }
});

router.delete('/orders/:orderId', async (req, res) => {
    try {
        const order = await Order.findByIdAndDelete(req.params.orderId);
        if (!order) 

          return (res.status(404).send({ error: 'not Found' }))
        res.send({ message: 'deleted' });
    } catch (error) {
        res.status(400).send({ error: 'rrror' });
    }
});

module.exports = router;
