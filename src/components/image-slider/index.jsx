import {useState} from "react";
import {FaArrowCircleLeft, FaArrowCircleRight} from "react-icons/fa";

import BackHome from "../back-home";
import "./style.css";

const ImageSlider = () => {
  const [images] = useState([
    "https://placehold.co/600x400?text=Slice\nOne",
    "https://placehold.co/600x400?text=Slice\nTwo",
    "https://placehold.co/600x400?text=Slice\nThree",
    "https://placehold.co/600x400?text=Slice\nFour",
    "https://placehold.co/600x400?text=Slice\nFive",
  ]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevious = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  const handleNext = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <>
      <BackHome title="Image Slider" />
      <div className="is-container">
        <FaArrowCircleLeft
          onClick={handlePrevious}
          className="is-arrow is-arrow-left"
        />
        {images && images.length
          ? images.map((imageItem, index) => (
              <img
                key={index}
                alt={imageItem}
                src={imageItem}
                className={
                  currentSlide === index
                    ? "is-current-image"
                    : "is-current-image is-hide-current-image"
                }
              />
            ))
          : null}
        <FaArrowCircleRight
          onClick={handleNext}
          className="is-arrow is-arrow-right"
        />
        <span className="is-circle-indicators">
          {images && images.length
            ? images.map((_, index) => (
                <button
                  key={index}
                  className={
                    currentSlide === index
                      ? "is-current-indicator"
                      : "is-current-indicator is-inactive-indicator"
                  }
                  onClick={() => setCurrentSlide(index)}
                ></button>
              ))
            : null}
        </span>
      </div>
    </>
  );
};

export default ImageSlider;
