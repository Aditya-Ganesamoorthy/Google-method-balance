const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  phone: { type: String, required: true, unique: true },
  email: { type: String, unique: true, sparse: true }, // sparse allows nulls
  password: { type: String }, // only used for ID-password login
  method: { type: String, enum: ['google', 'otp', 'password'], default: 'password' },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
