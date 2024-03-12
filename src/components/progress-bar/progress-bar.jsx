import {useState, useEffect} from "react";
import propTypes from "prop-types";

const Progress = ({value = 0, onComplete = () => {}}) => {
  const MIN = 0;
  const MAX = 100;

  const [percent, setPercent] = useState(value);

  useEffect(() => {
    setPercent(Math.min(Math.max(value, MIN), MAX));

    if (value >= MAX) {
      onComplete();
    }
  }, [value]);

  return (
    <div>
      <span>{percent.toFixed()}%</span>
      <div
        style={{width: `${percent}%`, backgroundColor: "red", height: "20px"}}
      />
    </div>
  );
};

Progress.propTypes = {
  value: propTypes.any,
  onComplete: propTypes.any,
};

export default Progress;
