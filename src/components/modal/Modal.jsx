import {FaTimes} from "react-icons/fa";
import propTypes from "prop-types";

import "./index.css";

const Modal = ({id, header, body, footer, onClose}) => {
  return (
    <div id={id} className="modal">
      <div className="modal-container">
        <div className="modal-header">
          <FaTimes onClick={onClose} className="modal-close" />
          {header ? header : <h2>Modal Header</h2>}
        </div>
        <div className="modal-body">{body ? body : <p>Modal Body</p>}</div>
        <div className="modal-footer">
          {footer ? footer : <h2>Modal Footer</h2>}
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  id: propTypes.string,
  header: propTypes.any,
  body: propTypes.any,
  footer: propTypes.any,
  onClose: propTypes.any,
};

export default Modal;
