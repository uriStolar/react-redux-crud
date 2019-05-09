import React from "react";
import ReactDOM from "react-dom";

const Modal = props => {
  console.log(props)
  return ReactDOM.createPortal(
    <div
      className="ui dimmer modals visible active"
      onClick={props.onDismiss}>
      <div className="ui standard modal visible active">
        <div className="header">{props.title}</div>
        <div className="content" onClick={e => e.stopPropagation()}>
          {props.content}
        </div>
        <div className="actions">
          {props.actions}
        </div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;