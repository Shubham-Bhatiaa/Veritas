import React, { useState } from "react";
import { FaStar, FaCheckCircle, FaSpinner } from "react-icons/fa";

const ReviewSystem = () => {
  const [merchantConnected, setMerchantConnected] = useState(false);
  const [loading, setLoading] = useState(false);
  const [reviews, setReviews] = useState([
    {
      id: 1,
      user: "Alice",
      rating: 5,
      comment: "Amazing service! Highly recommended."
    },
    {
      id: 2,
      user: "Bob",
      rating: 4,
      comment: "Great platform, but could improve UI."
    },
    {
      id: 3,
      user: "Charlie",
      rating: 3,
      comment: "Decent experience, but had some delays."
    }
  ]);

  // Dummy function to simulate merchant connection
  const connectMerchant = () => {
    setLoading(true);
    setTimeout(() => {
      setMerchantConnected(true);
      setLoading(false);
    }, 2000); // Simulate a 2-second delay for connection
  };

  return (
    <div id="review-system" className="py-16 bg-gray-900 bg-opacity-60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Secure and Transparent Review System
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 mx-auto">
            Empowering trust through decentralized, immutable, and transparent
            reviews for next-gen users.
          </p>
        </div>

        <div className="mt-12">
          <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg overflow-hidden shadow-xl border border-gray-700 p-8">
            {/* Merchant Connection Section */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white">
                Merchant Connection
              </h3>
              <p className="mt-2 text-gray-300">
                Connect your merchant account to start receiving reviews on the
                blockchain.
              </p>
              <div className="mt-4">
                {merchantConnected ? (
                  <div className="flex items-center text-green-400">
                    <FaCheckCircle className="h-5 w-5 mr-2" />
                    <span>Merchant Connected Successfully!</span>
                  </div>
                ) : (
                  <button
                    onClick={connectMerchant}
                    disabled={loading}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                  >
                    {loading ? (
                      <>
                        <FaSpinner className="animate-spin h-5 w-5 mr-2" />
                        Connecting...
                      </>
                    ) : (
                      "Connect Merchant Account"
                    )}
                  </button>
                )}
              </div>
            </div>

            {/* Reviews Section */}
            <div>
              <h3 className="text-xl font-semibold text-white">
                Recent Decentralized Reviews
              </h3>
              <div className="mt-4 space-y-4">
                {reviews.map((review) => (
                  <div key={review.id} className="p-4 bg-gray-700 rounded-lg">
                    <div className="flex items-center">
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            className={`h-5 w-5 ${
                              i < review.rating
                                ? "text-yellow-400"
                                : "text-gray-400"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-300">
                        {review.user}
                      </span>
                    </div>
                    <p className="mt-2 text-gray-300">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSystem;
