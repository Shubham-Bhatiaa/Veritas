import Product from "../models/Product1.js";
import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";

// Get all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

// Get a single product by ID
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ msg: "Product not found" });
    }
    res.json(product);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Product not found" });
    }
    res.status(500).send("Server error");
  }
};

const addReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body;
  const productId = req.params.id;

  // Extract token from the Authorization header
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }

  // Decode the token to get the userId
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const userId = decoded.id; // Ensure this matches the payload structure

  if (!rating || !comment) {
    res.status(400);
    throw new Error("Please provide a rating and comment.");
  }

  const product = await Product.findById(productId);

  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }

  // Create the review object with userId
  const review = {
    userId: userId, // Ensure userId is set correctly
    rating: Number(rating),
    comment
  };

  // Add the review to the product's reviews array
  product.reviews.push(review);

  // Recalculate the average rating
  const totalReviews = product.reviews.length;
  const sumRatings = product.reviews.reduce(
    (acc, item) => item.rating + acc,
    0
  );
  product.rating = sumRatings / totalReviews;

  // Save the updated product
  await product.save();

  res.status(201).json({ message: "Review added successfully", product });
});


export { getProducts, getProductById, addReview };
