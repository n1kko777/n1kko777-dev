import React from "react";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";

import { Modal } from "./Modal";
import { CustomSlide } from "./CustomSlide";

export const SwipeSlider = ({ images }) => {
  const [show, setShow] = React.useState(false);
  const [targetImg, setTargetImg] = React.useState({});

  const onImgOpen = (tImg) => {
    setTargetImg(tImg);
    setShow(true);
  };

  const onImgClose = () => {
    setTargetImg({});
    setShow(false);
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: "10px",
    centerMode: true,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    },
  };
  return (
    <>
      <Modal show={show} onImgClose={onImgClose} img={targetImg} />
      <div className="slider">
        <Slider {...settings}>
          {images.map((item) => (
            <CustomSlide onImgOpen={onImgOpen} img={item} key={item.url} />
          ))}
        </Slider>
      </div>
    </>
  );
};
