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
    responsive: [
      {
        breakpoint: 1141,
        settings: {
          centerPadding: "0",
          vertical: false,
          slidesToShow: 2,
          verticalSwiping: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          vertical: false,
          verticalSwiping: false,
          slidesToShow: 1,
          centerMode: true,
        },
      },
      // {
      //   breakpoint: 480,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1,
      //   },
      // },
    ],
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
