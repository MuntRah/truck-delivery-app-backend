const mongoose = require('mongoose');


const OrderSchema = mongoose.Schema({
  orderId: { type: mongoose.Schema.Types.ObjectId, required: true},
  from: { type: String, required: true },
  to: { type: String, required: true },
  price: { type: Number, required: true },
  action: {
    type: String,
    enum: ['accepted', 'rejected'],
    required: true
  },
  orderStatus: {
    type: String,
    enum: ['delivered', 'onWay', 'preparing'],
    required: true
  }
});

module.exports = mongoose.model('Order', OrderSchema);
