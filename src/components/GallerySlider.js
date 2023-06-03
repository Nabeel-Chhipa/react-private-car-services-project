import React from "react";
import Slider from "react-slick";
import image_1 from "../images/1.JPG";
import image_2 from "../images/2.JPG";
import image_3 from "../images/3.JPG";
import image_4 from "../images/4.JPG";
import image_5 from "../images/5.JPG";
import image_6 from "../images/6.jpg";
import image_7 from "../images/7.JPG";
import image_8 from "../images/8.jpg";
import image_9 from "../images/9.JPG";
import image_10 from "../images/10.JPG";
import image_11 from "../images/11.JPG";
import image_12 from "../images/12.JPG";

const GallerySlider = () => {
  const slideRowOne = [
    {
      imagePath: image_1,
      imgName: "Slider image One",
    },
    {
      imagePath: image_2,
      imgName: "Slider image Two",
    },
    {
      imagePath: image_3,
      imgName: "Slider image Three",
    },
    {
      imagePath: image_4,
      imgName: "Slider image Four",
    },
    {
      imagePath: image_5,
      imgName: "Slider image Five",
    },
    {
      imagePath: image_6,
      imgName: "Slider image Six",
    },
  ];
  const slideRowTwo = [
    {
      imagePath: image_7,
      imgName: "Slider image Seven",
    },
    {
      imagePath: image_8,
      imgName: "Slider image Eight",
    },
    {
      imagePath: image_9,
      imgName: "Slider image Nine",
    },
    {
      imagePath: image_10,
      imgName: "Slider image Ten",
    },
    {
      imagePath: image_11,
      imgName: "Slider image Eleven",
    },
    {
      imagePath: image_12,
      imgName: "Slider image Twelve",
    },
  ];

  const settingsRowOne = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 9000,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    rtl: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  const settingsRowTwo = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 9000,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    rtl: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      <div className="my-5 py-5">
        <Slider {...settingsRowOne}>
          {slideRowOne.map((item, index) => {
            return (
              <div key={item.index}>
                <img src={item.imagePath} alt={item.imgName} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
              </div>
            );
          })}
        </Slider>
        <Slider {...settingsRowTwo}>
          {slideRowTwo.map((item, index) => {
            return (
              <div key={item.index}>
                <img src={item.imagePath} alt={item.imgName} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default GallerySlider;
