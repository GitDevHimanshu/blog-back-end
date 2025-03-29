const mongoose = require('mongoose');

const userSchema =  mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      required: true 
    },
    password: {
      type: String,
      required: true
    }
  }, { timestamps: true } 
);

/** 
 * This creates a Mongoose model named User based on the userSchema.
 * The model represents a MongoDB collection (users), where each document follows the defined schema.
*/

const User = mongoose.model('User', userSchema);   

module.exports = User;
