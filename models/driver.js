const mongoose = require('mongoose');


const DriverSchema = mongoose.Schema({
  driver: { type: Boolean, required: true },
  orders: [{ type: Schema.Types.ObjectId, ref: 'Order' }] 
});

module.exports = mongoose.model('Driver', DriverSchema);
