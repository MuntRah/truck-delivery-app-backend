const mongoose = require('mongoose');
const customer = require('./customer');
const { Schema } = mongoose;


const OrderSchema = mongoose.Schema({
  from: { type: String, required: true },
  to: { type: String, required: true },
  vehicle:{
    type:String,
    enum: ['Sedan', 'SUV', 'Truck'],
    default: 'Sedan'
   },
  price: { type: Number , default: 50 },
  orderStatus: {
    type: String,
    enum: ['pending', 'accepted', 'on the way', 'delivered' , 'rejected'],
    default: 'pending'
  },
  customer:  {type: Schema.Types.ObjectId, ref: "Customer" },
  driver: { type: Schema.Types.ObjectId, ref: "Driver" },

});

module.exports = mongoose.model('Order', OrderSchema);
