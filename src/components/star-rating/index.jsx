import {useState} from "react";
import {FaStar} from "react-icons/fa";

import BackHome from "../back-home";
import "./index.css";

const StarRating = () => {
  const [totalStar] = useState(5);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (index) => {
    setRating(index);
  };

  const handleMouseEnter = (index) => {
    setHover(index);
  };

  const handleMouseLeave = () => {
    setHover(rating);
  };

  return (
    <>
      <BackHome title="Star Rating" />
      <div className="star">
        {[...Array(totalStar)].map((_, index) => {
          index += 1;

          return (
            <FaStar
              key={index}
              className={index <= (hover || rating) ? "active" : "inactive"}
              onClick={() => handleClick(index)}
              onMouseLeave={() => handleMouseLeave()}
              onMouseMove={() => handleMouseEnter(index)}
              size={48}
            />
          );
        })}
      </div>
    </>
  );
};

export default StarRating;
