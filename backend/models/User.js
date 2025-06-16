const mongoose = require('mongoose');

/*
const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  //phone: { type: String, required: true, unique: true },
  phone: {
      type: String,
      unique: true,
      required: function () {
        return this.method !== 'google' && this.method !== 'otp';
      }
    },
  email: { type: String, unique: true, sparse: true }, // sparse allows nulls
  password: { type: String }, // only used for ID-password login
  method: { type: String, enum: ['google', 'otp', 'password'], default: 'password' },
}, { timestamps: true });

*/

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  phone: { 
    type: String, 
    unique: true,
    sparse: true
  },
  email: { 
    type: String, 
    unique: true, 
    sparse: true 
  },
  password: { type: String },
  method: { 
    type: String, 
    enum: ['google', 'otp', 'password'], 
    default: 'password' 
  },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
