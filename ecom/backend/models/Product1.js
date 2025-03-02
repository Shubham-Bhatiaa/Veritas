// models/Product.js
import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // User who submitted the review
  rating: { type: Number, required: true, min: 1, max: 5 }, // Rating (1-5)
  comment: { type: String, required: true }
});

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  reviews: [reviewSchema] // Array of reviews
});

export default mongoose.model("Product", productSchema);
