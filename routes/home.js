const express = require("express");
const router = express.Router();
const Listing = require("../models/listing");  // Make sure the path to the Listing model is correct

// Home route
router.get("/", async (req, res) => {
  try {
    const allListings = await Listing.find({});  // Fetch all listings from the database
    res.render("home", { allListings });  // Pass allListings to the home view
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving listings");
  }
});

module.exports = router;
