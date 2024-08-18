const mongoose = require("mongoose");

const DriverSchema = mongoose.Schema({
  driver: { type: Boolean, required: true },
  orders: [{ type: Schema.Types.ObjectId, ref: "Order" }],
  veical: {
    type: String,
    enum: ["sedan", "suv", "pick-up truck"],
    required: true,
  },
  action: {
    type: String,
    enum: ["accepted", "rejected"],
    default: "pending",
    required: true,
  },
});

module.exports = mongoose.model("Driver", DriverSchema);
