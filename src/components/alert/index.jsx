import {useState} from "react";
import {FaTimes} from "react-icons/fa";

import BackHome from "../back-home";
import "./style.css";

const Alert = () => {
  const [type] = useState("warning");
  const [message] = useState("some data");
  const [isShow, setIsShow] = useState(true);

  const handleClose = (e) => {
    e.preventDefault();
    setIsShow(false);
  };

  return (
    <>
      <BackHome title="Alert" />
      <div className={`alert ${type} ${!isShow && "hide"}`}>
        <div className="alert__content">
          <h2>{type} !</h2>
          <p>{message}</p>
        </div>
        <FaTimes onClick={handleClose} className="alert__close" />
      </div>
    </>
  );
};

export default Alert;
