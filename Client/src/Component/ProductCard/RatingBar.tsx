import React, { useState } from 'react';
import { FaRegStar } from 'react-icons/fa6';

interface RatingProps {
  initialValue: number;
  maxRating: number;
}

const RatingBar: React.FC<RatingProps> = ({ initialValue, maxRating }) => {
  const [rating, setRating] = useState(initialValue);

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };

  return (
    <div className="flex items-center space-x-1">
      {[...Array(maxRating)].map((_, index) => (
        <button
          key={index}
          className={`w-8 h-8 flex justify-center items-center text-lg focus:outline-none ${
            index < rating ? 'bg-yellow-400' : 'bg-gray-200'
          }`}
          onClick={() => handleRatingChange(index + 1)}
        >
          <FaRegStar />
        </button>
      ))}
    </div>
  );
};

export default RatingBar;