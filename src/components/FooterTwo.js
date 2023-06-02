import React from "react";
import {
  FaArrowRight,
  FaFacebookF,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaMobileAlt,
  FaRegEnvelopeOpen,
  FaRegPaperPlane,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterTwo = () => {
  return (
    <>
      {/* footer area start */}
      <footer className='footer-area style-2'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-4 col-lg-6'>
              <div className='widget widget_about'>
                <h4 className='widget-title'>ABOUT COMPANY</h4>
                <div className='details'>
                  <p>
                  TPCS is based in the city of West Chicago and serves all of Chicagoland with a focus on western DuPage County.
                  </p>
                  <ul className='social-media style-border'>
                    <li>
                      <a href='https://www.facebook.com/Tommys-Private-Car-Service-2054415748184554/' target='_blank'>
                        <FaFacebookF />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-xl-4 col-lg-6'>
              <div className='widget widget_nav_menu'>
                <h4 className='widget-title'>USEFULL LINKS</h4>
                <ul>
                  <li>
                    <Link to='/'>
                      <FaArrowRight /> Home
                    </Link>
                  </li>
                  <li>
                    <Link to='/gallery'>
                      <FaArrowRight /> Gallery
                    </Link>
                  </li>
                  <li>
                    <Link to='/about'>
                      <FaArrowRight /> About Us
                    </Link>
                  </li>
                  <li>
                    <Link to='/contact'>
                      <FaArrowRight /> Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-xl-4 col-lg-6'>
              <div className='widget widget_contact'>
                <h4 className='widget-title'>CONTACT NOW</h4>
                <div className='single-contact-inner'>
                  <div className='icon'>
                    <FaMapMarkerAlt />
                  </div>
                  <div className='details'>
                    <p>0N427 Sunset Ave West Chicago</p>
                    <p>60185, United States</p>
                  </div>
                </div>
                <div className='single-contact-inner'>
                  <div className='icon'>
                    <FaMobileAlt />
                  </div>
                  <div className='details d-flex align-items-center justify-content-start'>
                    <a href='tel:8475329718' className="text-light">(847)532-9718</a>
                  </div>
                </div>
                <div className='single-contact-inner'>
                  <div className='icon'>
                    <FaRegEnvelopeOpen />
                  </div>
                  <div className='details d-flex align-items-center justify-content-start'>
                    <a href="mailto:tommyspcs@gmail.com" className="text-light">tommyspcs@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* footer area end */}
    </>
  );
};

export default FooterTwo;
