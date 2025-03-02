import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaShoppingCart, FaStar } from "react-icons/fa";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/products/${id}`
        );
        setProduct(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch product details");
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl font-semibold animate-pulse">Loading...</div>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-red-600 font-semibold">{error}</div>
      </div>
    );

  return (
    <div className="flex flex-col justify-center h-[90vh]">
      <div className="container mx-auto p-6 max-w-3xl bg-white shadow-zinc-200 shadow-xl rounded-lg">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
          {product.name}
        </h1>
        <div className="overflow-hidden rounded-lg shadow-md">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-80 object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="mt-6 text-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            {product.description}
          </p>
          <p className="text-2xl font-semibold text-blue-600 mt-4">
            ${product.price}
          </p>

          {/* Reviews Section */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Reviews: {product.reviews.length}
            </h2>
            {product.reviews.length > 0 ? (
              product.reviews.map((review, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-4 rounded-lg mb-4 text-left"
                >
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`text-xl ${
                          i < review.rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-700">{review.comment}</p>
                  <p className="text-sm text-gray-500 mt-2">
                    By: {review.userId|| "Anonymous"}{" "}
                    {/* Display user's name */}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-gray-600">No reviews yet.</p>
            )}
          </div>

          {/* Buy Now Button */}
          <button
            onClick={() => navigate("/payment", { state: { product } })}
            className="mt-6 flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <FaShoppingCart className="mr-2" /> Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
