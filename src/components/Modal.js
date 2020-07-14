import React from "react";
import useEscape from "../hooks/escape.hook";

export const Modal = ({ show = false, onImgClose, img = {} }) => {
  useEscape(onImgClose);
  React.useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [show]);

  return (
    <div>
      <div className={show ? "modal active" : "modal"}>
        <span onClick={onImgClose} className="modal__close">
          ×
        </span>
        <img src={img.url} alt={img.alt} className="modal__content" />
      </div>
    </div>
  );
};
