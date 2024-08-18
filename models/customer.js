const mongoose = require("mongoose");
const { Schema } = mongoose;

const CustomerSchema = mongoose.Schema({
  orders: [{ type: Schema.Types.ObjectId, ref: "Order" }],
});

module.exports = mongoose.model("Customer", CustomerSchema);
