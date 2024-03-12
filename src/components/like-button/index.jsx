import {useState} from "react";
import {FaHeart, FaSpinner, FaHeartBroken} from "react-icons/fa";

import BackHome from "../back-home";
import "./style.css";

const LikeButton = () => {
  const [liked, setLiked] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);

  const handleLikeUnlike = async () => {
    setError(null);
    setIsFetching(true);

    try {
      const response = await fetch(
        "https://www.greatfrontend.com/api/questions/like-button",
        {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({
            action: liked ? "unlike" : "like",
          }),
        }
      );

      if (response.status >= 200 && response.status < 300) {
        setLiked(!liked);
      } else {
        const res = await response.json();
        setError(res.message);
        return;
      }
    } finally {
      setIsFetching(false);
    }
  };

  return (
    <>
      <BackHome title="Like Button" />
      <button
        onClick={handleLikeUnlike}
        className={`like__btn ${liked ? "like__btn--liked" : ""}`}
      >
        {isFetching ? <FaSpinner /> : liked ? <FaHeart /> : <FaHeartBroken />}
      </button>
      {error && <div className="error">{error}</div>}
    </>
  );
};

export default LikeButton;
