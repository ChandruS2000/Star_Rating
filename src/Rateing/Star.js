import { useState } from "react";
// import { FaStar } from "react-icons/fa";
import { FaGrinStars } from "react-icons/fa";
import './Star.css';

export default function StarRating({ noOfStars = 10 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  console.log("rating : ",rating);
  console.log("hover : ",hover);

  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
    console.log("onClick : ",getCurrentIndex);
  }

  function handleMouseEnter(getCurrentIndex) {
    setHover(getCurrentIndex);
    console.log("onMouseMove : ",getCurrentIndex);
  }

  function handleMouseLeave() {
    setHover(rating);
  }

  return (
    <div className="star-rating">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        // console.log("index : ",index);
        return (
          <FaGrinStars
            key={index}
            className={index <= (hover || rating) ? "active" : "inactive"}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={40}
          />
        );
      })}
    </div>
  );
}