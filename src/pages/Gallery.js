import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
const Breadcrumb = React.lazy(() => import("../components/Breadcrumb"));
const FooterBottomOne = React.lazy(() =>
import("../components/FooterBottomOne")
);
const FooterTwo = React.lazy(() => import("../components/FooterTwo"));
const NavbarTwo = React.lazy(() => import("../components/NavbarTwo"));
const GallerySlider = React.lazy(() => import("../components/GallerySlider"))

const Gallery = () => {
  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>
          {/* Search Popup */}
          {/* <SearchPopup /> */}

          {/* Navbar One */}
          <NavbarTwo />

          {/* Breadcrumb */}
          <Breadcrumb title={"Gallery"} />

          {/* Galery Slider */}
          <GallerySlider />

          {/* Footer two */}
          <FooterTwo />

          {/* Footer Bottom One */}
          <FooterBottomOne />
        </Suspense>
      </Fragment>
    </>
  );
};

export default Gallery;
