const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  username: { type: String,
     required: true },
  password: { type: String,
     required: true },
  confirmPass: { type: String, required: true },
  vehicle: {
   type: String,
   enum: ["sedan", "suv", "pick-up truck"],
   required: true,
 },
  driver: { type: Schema.Types.ObjectId, ref: "Driver" }, 
  customer: { type: Schema.Types.ObjectId, ref: "Customer" }, 
});

module.exports = mongoose.model("User", UserSchema);
