const express = require("express");
const router = express.Router();

// Define the home route
router.get("/", (req, res) => {
  res.render("home");  // Render home.ejs from the views folder
});

module.exports = router;
