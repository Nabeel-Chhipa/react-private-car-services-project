import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";
const AboutTwo = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {/* about area start */}
      <div className='about-area-2 pd-top-120 pd-bottom-240'>
        <div className='container'>
          <div className='about-area-inner'>
            <div className='row'>
              <div className='col-lg-5 order-lg-2'>
                <div className='about-thumb-wrap mb-lg-0 mb-4'>
                  <img
                    className='img-1'
                    src='assets/img/about/shape.png'
                    alt='Transpro'
                  />
                  <img
                    className='img-2'
                    src='assets/img/about/7.png'
                    alt='Transpro'
                  />
                  <img
                    className='img-3'
                    src='assets/img/about/8.png'
                    alt='Transpro'
                  />
                  <div className='exprience-wrap'>
                    <img src='assets/img/about/shape-3.png' alt='Transpro' />
                    <div className='details'>
                      <TrackVisibility once>
                        {({ isVisible }) =>
                          isVisible && (
                            <h1>
                              <CountUp delay={0} start={0} end={44} />
                            </h1>
                          )
                        }
                      </TrackVisibility>
                      <p>YEARS EXPERIENCE</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-7 align-self-center order-lg-1'>
                <div className='about-inner-wrap ms-0'>
                  <div className='section-title mb-0'>
                    <h4 className='subtitle'>ABOUT US</h4>
                    <h2 className='title mb-2'>
                    Tommy's Private Car Service
                    </h2>
                    <p>
                    I am Tommy Dunmore and I am committed to the perfect ride for each and every passenger.
                    </p>
                    <p>
                    TPCS is based in the city of West Chicago and serves all of Chicagoland with a focus on western DuPage County.  You can book a ride right here on this website, or feel free to give me a call for your next trip to the airport or your next night out on the town. (847) 532-9718
                    </p>
                    <div className='btn-wrap'>
                      <Link className='btn btn-base' to='/about'>
                        READ MORE
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ModalVideo
          channel='youtube'
          autoplay
          isOpen={isOpen}
          videoId='XM6kTQPzzpQ'
          onClose={() => setOpen(false)}
        />
      </div>
      {/* about area end */}
    </>
  );
};

export default AboutTwo;
