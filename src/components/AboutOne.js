import React from "react";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
const AboutOne = () => {
  return (
    <>
      {/* about area start */}
      <div className='about-area pd-bottom-120'>
        <div className='container'>
          <div className='about-area-inner'>
            <div className='row'>
              <div className='col-lg-6'>
                <div className='about-thumb-wrap'>
                  <img
                    className='img-1'
                    src='./assets/img/about/shape.png'
                    alt='Transpro'
                  />
                  <img
                    className='img-2'
                    src='./assets/img/about/1.png'
                    alt='Transpro'
                  />
                  <img
                    className='img-3'
                    src='./assets/img/about/2.png'
                    alt='Transpro'
                  />
                  <div className='exprience-wrap'>
                    <img src='./assets/img/about/shape-3.png' alt='Transpro' />
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
              <div className='col-lg-6 align-self-center'>
                <div className='about-inner-wrap'>
                  <div className='section-title mb-0'>
                    <h4 className='subtitle'>ABOUT ME</h4>
                    <h2 className='title'>
                      WELCOME TO THE TOMMY'S PRIVATE CAR SERVICES
                    </h2>
                    <p className='content px-0'>
                    I was born and raised in Chicagoland and spent 44 of my 47 years here.  I have extensive experience with fleet management, driving, and customer service.  I enjoy woodworking, singing (I am a tenor ), attending concerts, and raising the finest tomatoes you could ever hope to taste.  I live with my beautiful wife in West Chicago.
                    </p>
                    <p className='content px-0'>
                    They say that nothing worth doing is easy. Like every one of us, I&apos;ve had my bumps in the road. But if you ask me, I&apos;ll always tell you that I wouldn&apos;t change a thing. Why? Because throughout my journey I&apos;ve honed my skills and proven that my services get results in the real world. So today, you can benefit from my years of experience.
                    </p>
                    {/* <div className='row'>
                      <div className='col-xl-6 col-lg-12 col-md-6'>
                        <ul className='list-inner-wrap mb-mb-0 mb-3 mb-lg-3 mb-xl-0'>
                          <li>
                            <img
                              src='./assets/img/icon/check.png'
                              alt='Transpro'
                            />{" "}
                            Unlimited Revisions
                          </li>
                          <li>
                            <img
                              src='./assets/img/icon/check.png'
                              alt='Transpro'
                            />
                            Best Fitness Excercise
                          </li>
                          <li>
                            <img
                              src='./assets/img/icon/check.png'
                              alt='Transpro'
                            />
                            Combine Fitness and
                          </li>
                          <li>
                            <img
                              src='./assets/img/icon/check.png'
                              alt='Transpro'
                            />
                            Best Solutions
                          </li>
                        </ul>
                      </div>
                      <div className='col-xl-6 col-lg-12 col-md-6 align-self-center'>
                        <div className='thumb'>
                          <img src='./assets/img/about/3.png' alt='Transpro' />
                        </div>
                      </div>
                    </div>
                    <div className='btn-wrap'>
                      <Link className='btn btn-base' to='/about'>
                        ABOUT MORE
                      </Link>
                      <div className='author-wrap'>
                        <div className='thumb'>
                          <img src='./assets/img/about/4.png' alt='Transpro' />
                        </div>
                        <div className='details'>
                          <img
                            src='./assets/img/about/signature.png'
                            alt='Transpro'
                          />
                          <p>CEO, Of Company</p>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* about area end */}
    </>
  );
};

export default AboutOne;
