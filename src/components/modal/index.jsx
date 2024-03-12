import {useState} from "react";

import BackHome from "../back-home";
import * as ModalDisplay from "./Modal";
import "./index.css";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  function handleToggleModal() {
    setShowModal(!showModal);
  }

  function handleClose() {
    setShowModal(false);
  }

  return (
    <>
      <BackHome title="Modal" />
      <button onClick={handleToggleModal} className="modal-trigger">
        Open Modal
      </button>
      {showModal && (
        <ModalDisplay.default
          id="modal"
          header={<h3>My Modal Header</h3>}
          body={<p>My Modal Body</p>}
          footer={<h3>My Modal Footer</h3>}
          onClose={handleClose}
        />

        // <ModalDisplay.default id="modal" onClose={handleClose} />
      )}
    </>
  );
};

export default Modal;
