const mongoose = require('mongoose');

const userPetSchema = new mongoose.Schema({  
  name: String,
  dateOfBieth: Date,
  breed: String,
  comment: String,
  owner: String,
});


module.exports = {
  userPetSchema,
};