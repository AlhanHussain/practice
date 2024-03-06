const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://FoodProject:FoodProject@cluster0.lhdlr0w.mongodb.net/FoodProject?retryWrites=true&w=majority";

let FoodItem;

const mongoDB = async () => {
  let FoodCategory; // Define FoodCategory variable inside mongoDB function
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB successfully!");
    
    // Check if FoodItem model already exists
    if (!mongoose.models.FoodItem) {
      FoodItem = mongoose.model(
        "FoodItem",
        new mongoose.Schema({}),
        "FoodItem"
      );
    } else {
      FoodItem = mongoose.model("FoodItem"); // If model already exists, use it
    }

    // Check if FoodCategory model already exists
    if (!mongoose.models.FoodCategory) {
      FoodCategory = mongoose.model(
        "FoodCategory",
        new mongoose.Schema({}),
        "FoodCategory"
      );
    } else {
      FoodCategory = mongoose.model("FoodCategory"); // If model already exists, use it
    }
    
    const fetchedData = await FoodItem.find({});
    // console.log("Fetched Data:", fetchedData);
    
    const fetchedCategories = await FoodCategory.find({});
    // console.log("Fetched Categories:", fetchedCategories);

    mongoose.disconnect(); // Close the connection when done
    return { foodItems: fetchedData, foodCategories: fetchedCategories }; // Return fetchedData and fetchedCategories
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    // Handle error appropriately
    throw err; // Rethrow the error
  }
};

module.exports = mongoDB;
