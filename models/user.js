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
    type:Schema.Types.ObjectId,
    ref:"Customer"
  },
  driver:{
    type: Schema.Types.ObjectId,
    ref:"Driver"
  },

  isAdmin : boolean


});


userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject.hashedPassword;
  }
});

module.exports = mongoose.model('User', userSchema);

