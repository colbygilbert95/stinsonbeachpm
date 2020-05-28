import React from "react";
import GetForm from "../Form/StartedForm";
function Modal(props) {
  return (
    <div
      className="modal fade"
      id="modalGetStarted"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="modalGetStartedTitle"
      aria-hidden="true"
      data-backdrop="static"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <div
              style={{ display: "inline" }}
              className="modal-title"
              id="modalGetStartedTitle"
            >
              {props.title}
            </div>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <GetForm />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
