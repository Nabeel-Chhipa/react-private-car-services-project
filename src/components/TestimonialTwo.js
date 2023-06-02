import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";

const TestimonialTwo = () => {
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return <FaArrowLeft className={className} onClick={onClick} />;
  }
  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return <FaArrowRight className={className} onClick={onClick} />;
  }
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 5000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
      {/* testimonial area start */}
      <div
        className='testimonial-area pd-top-115 pd-bottom-120'
        style={{ backgroundImage: "url(assets/img/testimonial/bg.png)" }}
      >
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-6'>
              <div className='section-title text-center mb-0'>
                <h4 className='subtitle style-2'>TESTIMONIALS</h4>
                <h2 className='title'>OUR CLIENT&apos;S FEEDBACK</h2>
                <p className='content'>
                  Dramatically enhance interactive metrics for reliable
                  services. Proactively unleash fully researched e-commerce.
                </p>
              </div>
            </div>
          </div>
          <div className='testimonial-slider owl-carousel'>
            <Slider {...settings}>
              <div className='item'>
                <div className='single-testimonial-wrap'>
                  <div className='icon'>
                    <img
                      src='assets/img/testimonial/quote.png'
                      alt='Transpro'
                    />
                  </div>
                  <p>
                    “Easy to book, reasonable pricing, very nice SUV. Tommy arrived early, was professional and kept the ride smooth on my early morning ride. Highly recommend and I will 100% use again!”
                  </p>
                  <div className='client-wrap'>
                    {/* <div className='thumb'>
                      <img src='assets/img/testimonial/1.png' alt='Transpro' />
                    </div> */}
                    <div className='details'>
                      <h5>JACOB WOLFE</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div className='single-testimonial-wrap'>
                  <div className='icon'>
                    <img
                      src='assets/img/testimonial/quote.png'
                      alt='Transpro'
                    />
                  </div>
                  <p>
                    “Nick, our driver, was on time, friendly, easy to visit with.  This is our first time using a service to and from airport.  We will use them again and hope our driver will be Nick.”
                  </p>
                  <div className='client-wrap'>
                    <div className='details'>
                      <h5>KATHLEEN MORROW</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div className='single-testimonial-wrap'>
                  <div className='icon'>
                    <img
                      src='assets/img/testimonial/quote.png'
                      alt='Transpro'
                    />
                  </div>
                  <p>
                    “Tommy is polite, punctual, and always takes good care of his passengers. You won&apos;t be disappointed when you choose his service - safety and customer service are his top priorities.”
                  </p>
                  <div className='client-wrap'>
                    <div className='details'>
                      <h5>WENDY PITTS</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div className='single-testimonial-wrap'>
                  <div className='icon'>
                    <img
                      src='assets/img/testimonial/quote.png'
                      alt='Transpro'
                    />
                  </div>
                  <p>
                    “Vehicle is very well maintained, top end transportation. Driver was early and very professional. I travel extensively and this is the best Private car service of any I have used.”
                  </p>
                  <div className='client-wrap'>
                    <div className='details'>
                      <h5>JOHN FARLEY</h5>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
      {/* testimonial area end */}
    </>
  );
};

export default TestimonialTwo;
