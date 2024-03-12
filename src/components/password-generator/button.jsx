import propTypes from "prop-types";

const Button = ({onClick, text, customClass}) => {
  return (
    <button className={customClass} onClick={onClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  onClick: propTypes.any,
  text: propTypes.string,
  customClass: propTypes.string,
};

export default Button;
