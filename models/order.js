const mongoose = require('mongoose');
const { Schema } = mongoose; 

const OrderSchema = new Schema({
  orderId: { type: mongoose.Schema.Types.ObjectId, required: true, unique: true },
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
