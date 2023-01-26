const mongoose = require("mongoose");


const { userPetSchema } = require("./schema.js");
const userPet = mongoose.model("UsersPets", userPetSchema);

async function getUserPets(req, res) {}

async function addUserPet(req, res) {}

async function removeUserPet(req, res) {}

async function updateUserPet(req, res) {}

module.exports = {
  getUserPets,
  addUserPet,
  removeUserPet,
  updateUserPet,
};