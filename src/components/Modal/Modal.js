import React from "react";
import "./Modal.scss";

const Modal = ({ header, text, actions, closeModal }) => {
  return (
    <div>
      <div data-testid="modal" className="modal" onClick={() => closeModal()}>
        <div className="modal__content" onClick={(e) => e.stopPropagation()}>
          <div className="modal__header">
            <h3>{header}</h3>
            <span
              data-testid="modal-close"
              className="modal__header-close"
              onClick={() => closeModal()}
            >
              X
            </span>
          </div>
          <div className="modal__body">
            <div className="modal__body-text">
              <p>{text}</p>
            </div>
            <div className="modal__actions">{actions}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
