import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Rating = ({ rating }) => {
  const fullStars = Math.floor(rating); // Number of full stars
  const halfStar = rating % 1 !== 0; // If rating has a decimal, show a half star
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0); // Remaining empty stars

  return (
    <div className="flex text-yellow-500 text-xl">
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={i} />
      ))}
      {halfStar && <FaStarHalfAlt />}
      {[...Array(emptyStars)].map((_, i) => (
        <FaRegStar key={i + fullStars + 1} />
      ))}
    </div>
  );
};

export default Rating;
