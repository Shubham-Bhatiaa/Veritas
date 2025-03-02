import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Lottie from "lottie-react";
import successAnimation from "../../assets/successAnimation1.json";
import successAnimation1 from "../../assets/successAnimation.json";
import { FaStar } from "react-icons/fa";
const SuccessPage = () => {
  const location = useLocation();
  const { product } = location.state; // Get product details from navigation state
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [animation, setAnimation] = useState(successAnimation1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimation(successAnimation);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);
  const handleRating = (newRating) => {
    console.log("Selected Rating:", newRating); // Debugging
    setRating(newRating);
  };
  const handleSubmitReview = async () => {
    if (!rating || !comment.trim()) {
      alert("Please provide a rating and review text.");
      return;
    }
    setIsSubmitting(true);
    try {
      console.log("Submitting Review:", { rating, comment }); // Debugging
      await axios.post(
        `http://localhost:5000/api/products/${product._id}/reviews`,
        { rating, comment },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json"
          }
        }
      );
      alert("Review submitted successfully!");
      navigate("/");
    } catch (err) {
      console.error("Error submitting review:", err);
      alert("Failed to submit review. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  const getRatingTextColor = () => {
    if (rating >= 4) return "text-green-600";
    if (rating === 3) return "text-yellow-600";
    if (rating >= 1) return "text-red-600";
    return "text-gray-600";
  };
  return (
    <div className="flex flex-col items-center justify-start h-[90vh] bg-gray-50 text-gray-800 p-4">
      {/* Animated Success Tick */}
      <div className="w-40 h-40">
        <Lottie animationData={animation} loop={false} />
      </div>
      <h1 className="text-3xl font-bold mb-2">Purchase Successful!</h1>
      <p className="text-gray-600 text-lg mb-2">Thank you for your purchase.</p>
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg border border-gray-200">
        <h2 className="text-xl font-semibold mb-2 text-center">
          Leave a Review
        </h2>
        <div className="flex flex-col items-center mb-2">
          <span className="text-gray-700 text-sm mb-2">Rating</span>
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                className={`cursor-pointer text-3xl transition-all duration-300 ${
                  star <= rating ? "text-yellow-400" : "text-gray-300"
                }`}
                onClick={() => handleRating(star)}
              />
            ))}
          </div>
          {rating > 0 && (
            <p className={`text-md font-bold mt-1 ${getRatingTextColor()}`}>
              You rated {rating} stars
            </p>
          )}
        </div>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full p-3 bg-white border border-gray-300 outline-none rounded-lg focus:ring-2 focus:ring-indigo-400"
          rows="4"
          placeholder="Write your review here..."
        />
        <button
          onClick={handleSubmitReview}
          disabled={isSubmitting}
          className="w-full mt-4 py-3 bg-indigo-600 text-white text-lg font-medium rounded-md transition-all duration-300 hover:bg-indigo-700 shadow-sm disabled:bg-indigo-400 disabled:cursor-not-allowed" >
          {isSubmitting ? "Submitting..." : "Submit Review"}
        </button>
      </div>
    </div>
  );
};
export default SuccessPage;
