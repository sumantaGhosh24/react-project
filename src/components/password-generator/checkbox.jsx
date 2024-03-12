import propTypes from "prop-types";

const Checkbox = ({title, state, onChange}) => {
  return (
    <div className="pg__checkbox">
      <input type="checkbox" onChange={onChange} checked={state} />
      <label>{title}</label>
    </div>
  );
};

Checkbox.propTypes = {
  title: propTypes.string,
  state: propTypes.bool,
  onChange: propTypes.any,
};

export default Checkbox;
