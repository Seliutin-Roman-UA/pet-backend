const mongoose = require('mongoose');

const adSchema = new mongoose.Schema({
  owner: {
    type: String,
    required: true,
  },
  petname: String,
  imgURL: String,
  dateofbirth: Date,
  breed: String,
  sex: ['male', 'femail'],
  location: String,
  price: {
    type: Number,
    default: 0,
  },
  comments: String

});


module.exports = {
  adSchema,
};