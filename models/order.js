const mongoose = require('mongoose');
const customer = require('./customer');
const { Schema } = mongoose;


const OrderSchema = mongoose.Schema({
  orderId: { type: mongoose.Schema.Types.ObjectId, required: true},
  from: { type: String, required: true },
  to: { type: String, required: true },
  price: { type: Number , default: 50 },

  orderStatus: {
    type: String,
    enum: ['delivered', 'onWay', 'preparing'],
    required: true
  },
  customer: [{ type: Schema.Types.ObjectId, ref: "Customer" }],
  driver: [{ type: Schema.Types.ObjectId, ref: "Driver" }],

});

module.exports = mongoose.model('Order', OrderSchema);
