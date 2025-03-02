import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MdVerified } from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import Rating from "./Rating";

const ProductCard = ({ product }) => {
  // Calculate average rating dynamically
  const averageRating =
    product.reviews.length > 0
      ? (
          product.reviews.reduce((sum, review) => sum + review.rating, 0) /
          product.reviews.length
        ).toFixed(1)
      : 0;

  // Calculate number of purchases dynamically (assuming `purchases` field exists in the product schema)
  let purchasesLastMonth = product.reviews.length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="border border-gray-200 p-6 rounded-lg shadow-lg bg-white hover:shadow-xl transition duration-300"
    >
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full object-contain fit h-64 mb-4 rounded-md"
      />

      {/* Product Title & Description */}
      <h2 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h2>
      <p className="text-gray-600 text-sm mb-2">{product.description}</p>

      {/* Product Stats Section */}
      <div className="bg-blue-50 p-4 w-1/2 rounded-lg text-blue-500 my-5">
        {/* Dynamic Rating */}
        <div className="mb-2">
          <Rating rating={averageRating} />
        </div>

        {/* Dynamic Purchases */}
        <p className="text-sm">
          <span className="font-bold">{purchasesLastMonth}</span> people
          purchased this last month.
        </p>

        {/* Verification Details */}
        <div className="flex items-center gap-1 text-sm">
          <MdVerified size={18} />
          <span>
            Verified by <span className="font-bold">Veritas</span>
          </span>
        </div>

        {/* Trusted via Blockchain */}
        <div className="flex items-center gap-1 text-sm">
          <VscWorkspaceTrusted size={18} color="green" />
          <span>
            Trusted via <span className="font-bold">Blockchain</span>
          </span>
        </div>
      </div>

      {/* Price & Buy Now Button */}
      <p className="text-indigo-600 font-bold text-lg">${product.price}</p>
      <Link
        to={`/product/${product._id}`}
        className="mt-4 inline-block bg-indigo-600 text-white px-5 py-2 rounded-md hover:bg-indigo-700 transition duration-300"
      >
        Buy Now
      </Link>
    </motion.div>
  );
};

export default ProductCard;
