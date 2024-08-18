const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  hashedPassword: {
    type: String,
    required: true
  },
  customer:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Customer"
  },
  driver:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Driver"
  },

  isAdmin : Boolean


});


userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject.hashedPassword;
  }
});

module.exports = mongoose.model('User', userSchema);

