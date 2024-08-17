const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  email: { type: String,
     required: true },
  password: { type: String,
     required: true },
  confirmPass: { type: String, required: true },
  driver: { type: Schema.Types.ObjectId, ref: "Driver" }, 
  customer: { type: Schema.Types.ObjectId, ref: "Customer" }, 
});

module.exports = mongoose.model("User", UserSchema);
