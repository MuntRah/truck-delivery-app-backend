const mongoose = require("mongoose");
const { Schema } = mongoose;

const DriverSchema = mongoose.Schema({
  orders: [{ type: Schema.Types.ObjectId, ref: "Order" }],

  status: {
    type: String,
    enum: ["available", "busy"],
    default: "busy",
    required: true,
  },
  driverLicence:{
    type: String,
    required: false,
  },

});

module.exports = mongoose.model("Driver", DriverSchema);
