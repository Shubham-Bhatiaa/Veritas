import express from "express";
import {
  getProducts,
  getProductById,
  addReview
} from "../controllers/productController.js";
import auth from "../middleware/auth.js";

const router = express.Router();

// Get all products
router.get("/", getProducts);

// Get a single product by ID
router.get("/:id", getProductById);

// Add a review to a product
// Using POST method with authentication middleware
router.post("/:id/reviews", auth, addReview);

export default router;
