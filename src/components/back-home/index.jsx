import {Link} from "react-router-dom";
import propTypes from "prop-types";

import "./index.css";

const BackHome = ({title}) => {
  return (
    <div className="bh-container">
      <Link to="/" className="bh-link">
        Back to Home
      </Link>
      <h2 className="bh-title">{title}</h2>
    </div>
  );
};

BackHome.propTypes = {
  title: propTypes.string,
};

export default BackHome;
