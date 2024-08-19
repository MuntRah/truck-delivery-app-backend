const mongoose = require('mongoose');
const customer = require('./customer');
const { Schema } = mongoose;


const OrderSchema = mongoose.Schema({
  from: { type: String, required: true },
  to: { type: String, required: true },
  veichle:{
    type:String,
    enum: ['sedan', 'suv', 'truck'],
    default: 'sedan'
   },
  price: { type: Number , default: 50 },
  orderStatus: {
    type: String,
    enum: ['pending', 'on the way', 'deliverd' , 'rejected'],
    default: 'pending'
  },
  customer:  {type: Schema.Types.ObjectId, ref: "Customer" },
  driver: { type: Schema.Types.ObjectId, ref: "Driver" },

});

module.exports = mongoose.model('Order', OrderSchema);
