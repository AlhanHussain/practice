const express = require("express");
const router = express.Router();
const mongoDB = require("../db"); // Import the mongoDB function

router.post("/foodData", async (req, res) => {
  try {
    const fetchedData = await mongoDB(); // Call the mongoDB function to fetch data
    const fetchedCategories = fetchedData.foodCategories; // Extracting categories from fetched data
    const fetchedItems = fetchedData.foodItems; // Extracting items from fetched data
    res.json({ items: fetchedItems, categories: fetchedCategories }); // Send fetched items and categories as response
  } catch (err) {
    console.error("Error fetching data:", err);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

module.exports = router;
