import React from "react";

export const CustomSlide = ({ onImgOpen, img, ...props }) => {
  return (
    <div {...props} className="slider__container">
      <div onClick={() => onImgOpen(img)} className="slider__item">
        <img src={img.url} alt={img.alt} />
      </div>
    </div>
  );
};
