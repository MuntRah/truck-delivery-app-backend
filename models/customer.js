const mongoose = require('mongoose');
const { Schema } = mongoose;

const CustomerSchema = new Schema({
  customer: { type: Boolean, required: true },
  orders: [{ type: Schema.Types.ObjectId, ref: "Order" }],
});

module.exports = mongoose.model("Customer", CustomerSchema);
