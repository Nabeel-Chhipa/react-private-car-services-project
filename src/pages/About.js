import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
const AboutOne = React.lazy(() => import("../components/AboutOne"));
const Breadcrumb = React.lazy(() => import("../components/Breadcrumb"));
const FooterBottomOne = React.lazy(() =>
  import("../components/FooterBottomOne")
);
const FooterTwo = React.lazy(() => import("../components/FooterTwo"));
const NavbarTwo = React.lazy(() => import("../components/NavbarTwo"));
const About = () => {
  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>
          
          {/* Navbar One */}
          <NavbarTwo />

          {/* Breadcrumb */}
          <Breadcrumb title={"ABOUT US"} />

          {/* About One */}
          <div className='pd-top-120 pd-bottom-120'>
            <AboutOne />
          </div>

          {/* Footer two */}
          <FooterTwo />

          {/* Footer Bottom One */}
          <FooterBottomOne />
        </Suspense>
      </Fragment>
    </>
  );
};

export default About;
