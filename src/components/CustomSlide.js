import React, { memo } from "react";

export const CustomSlide = memo(
  ({ data, imagesCount, isActive, index, onItemClick }) => (
    <div
      className={`slide ${isActive ? "active" : ""}`}
      style={{
        backgroundImage: `url(${data.imgUrl})`,
        flex: isActive ? 3 : 1,
      }}
      onClick={onItemClick}
      data-index={index}
      data-link={data.link}
      title="Посмотреть сайт"
    />
  )
);
