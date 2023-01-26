const mongoose = require("mongoose");


const { adPetSchema } = require("./schema.js");
const ad = mongoose.model("Ads", adPetSchema);

async function getAllAds(req, res) { 
  ad.find();
}

async function getMyAds(req, res) {}

async function addAd(req, res) {}

async function removeAd(req, res) {}

async function updateAd(req, res) { }

async function makeFavorite(req, res) {}

async function searchAds(req, res) {}

module.exports = {
  getAllAds,
  getMyAds,
  addAd,
  removeAd,
  updateAd,
  makeFavorite,
  searchAds,
};