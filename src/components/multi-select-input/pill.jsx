import {FaTimes} from "react-icons/fa";
import propTypes from "prop-types";

const Pill = ({text, onClick}) => {
  return (
    <span onClick={onClick} className="msi__pill">
      <span className="msi__pill__text">
        {text} <FaTimes />{" "}
      </span>
    </span>
  );
};

Pill.propTypes = {
  text: propTypes.string,
  onClick: propTypes.any,
};

export default Pill;
