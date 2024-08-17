const mongoose = require('mongoose');
const { Schema } = mongoose;

const DriverSchema = new Schema({
  driver: { type: Boolean, required: true },
  orders: [{ type: Schema.Types.ObjectId, ref: 'Order' }] 
});

module.exports = mongoose.model('Driver', DriverSchema);
