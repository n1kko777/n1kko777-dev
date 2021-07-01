import React, { useCallback, useMemo, useState } from "react";
import { useHistory } from "react-router-dom";
import { CustomSlide } from "./CustomSlide";

export const SwipeSlider = ({ images }) => {
  const history = useHistory();
  const [activeSlide, setActiveSlide] = useState(0);

  const onSlideClick = useCallback(
    (event) => {
      const targetIndex = Number(event.target.dataset.index);
      const targetLink = event.target.dataset.link;

      if (targetIndex === activeSlide) {
        history.push(targetLink);
      } else {
        setActiveSlide(targetIndex);
      }
    },
    [activeSlide, history]
  );

  const memoSlides = useMemo(
    () =>
      images.map((el, index) => (
        <CustomSlide
          data={el}
          index={index}
          isActive={index === activeSlide}
          onItemClick={onSlideClick}
          key={`${el.url}${index}`}
          imagesCount={images?.length || 1}
        />
      )),
    [activeSlide, images, onSlideClick]
  );

  return <div className="slider">{memoSlides}</div>;
};
