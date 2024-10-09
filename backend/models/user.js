const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String },
  battleDeck: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Card' }],
  email: { type: String },
  lastLogin: { type: Number, required: true, default: Date.now() },
  foodCoin: { type: Number, required: true, default: 200 },
  gameCoin: { type: Number, required: true, default: 100 },
  imageUrl: { type: String },
  walletAddress: { type: String },
  // salt: { type: String, required: true },
});

module.exports = mongoose.model('User', userSchema);
