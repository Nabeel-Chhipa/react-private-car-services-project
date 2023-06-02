import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavbarTwo = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);

  // Control sidebar navigation
  let items = document.querySelectorAll(".menu-item-has-children > a");
  for (let i in items) {
    if (items.hasOwnProperty(i)) {
      items[i].onclick = function () {
        this.parentElement
          .querySelector(".sub-menu")
          .classList.toggle("active");
        this.classList.toggle("open");
      };
    }
  }
  return (
    <>
      {/* navbar start */}
      <header className="navbar-area">
        <nav
          className={
            active
              ? "navbar navbar-area-2 navbar-area navbar-expand-lg sticky-active"
              : "navbar navbar-area-2 navbar-area navbar-expand-lg"
          }
        >
          <div className="container nav-container">
            <div className="responsive-mobile-menu">
              <button
                onClick={() => setOpen(!open)}
                className={
                  open
                    ? "menu toggle-btn d-block d-lg-none open"
                    : "menu toggle-btn d-block d-lg-none "
                }
                data-target="#transpro_main_menu"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-left" />
                <span className="icon-right" />
              </button>
            </div>
            <div className="logo">
              <Link className="logo-1" to="/">
                <img src="assets/img/home-2/logo.png" alt="Transpro" />
              </Link>
              <Link className="logo-2" to="/">
                <img src="assets/img/logo-2.png" alt="logo" />
              </Link>
            </div>
            <div className="nav-right-part nav-right-part-mobile">
              <Link className="btn btn-base" to="/contact">
                <span></span> Book Now
              </Link>
            </div>
            <div
              className={
                open
                  ? "collapse navbar-collapse sopen"
                  : "collapse navbar-collapse"
              }
              id="transpro_main_menu"
            >
              <ul className="navbar-nav menu-open text-end">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/gallery">Gallery</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="nav-right-part nav-right-part-desktop">
              <Link className="btn btn-base" to="https://book.mylimobiz.com/v4/tommyspcs" target='_blank'>
                <span></span> Book Now
              </Link>
            </div>
          </div>
        </nav>
      </header>
      {/* navbar end */}
    </>
  );
};

export default NavbarTwo;
