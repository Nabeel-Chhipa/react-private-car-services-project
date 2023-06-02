import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
const AboutTwo = React.lazy(() => import("../components/AboutTwo"));
const BannerTwo = React.lazy(() => import("../components/BannerTwo"));
const FooterBottomOne = React.lazy(() =>
  import("../components/FooterBottomOne")
);
const FooterTwo = React.lazy(() => import("../components/FooterTwo"));
const NavbarTwo = React.lazy(() => import("../components/NavbarTwo"));
const TestimonialTwo = React.lazy(() => import("../components/TestimonialTwo"));
const VideoAreaOne = React.lazy(() => import("../components/VideoAreaOne"));
const WhyChooseUsTwo = React.lazy(() => import("../components/WhyChooseUsTwo"));
const HomeTwo = () => {
  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>
          
          {/* Navbar Two */}
          <NavbarTwo />

          {/* Banner Two */}
          <BannerTwo />

          {/* About Two */}
          <AboutTwo />

          {/* Why Choose Us Two */}
          <WhyChooseUsTwo />

          {/* Testimonial Two */}
          <TestimonialTwo />

          {/* Video Area One */}
          <VideoAreaOne />

          {/* Footer Two */}
          <FooterTwo />

          {/* Footer Bottom One */}
          <FooterBottomOne />
        </Suspense>
      </Fragment>
    </>
  );
};

export default HomeTwo;
