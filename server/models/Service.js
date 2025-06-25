const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  description: String,
  rate: Number,
  quantity: Number
});

module.exports = mongoose.model('Service', serviceSchema);
