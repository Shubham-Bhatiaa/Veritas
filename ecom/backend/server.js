import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.js";
import productRoutes from "./routes/products.js";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app = express();

// Resolve __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors({ origin: "*", credentials: true }));

app.use(express.json()); // Parse JSON request bodies

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/auth", authRoutes); // Authentication routes
app.use("/api/products", productRoutes); // Product routes

// Serve static files (if needed)
app.use("/assets", express.static(path.join(__dirname, "assets")));



// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
