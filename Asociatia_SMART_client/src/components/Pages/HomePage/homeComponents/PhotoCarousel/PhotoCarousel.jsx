import "./PhotoCarouselStyles.css";
import { useState } from "react";
import carouselRoutes from "./carouselImgRoutes.js";

export default function PhotoCarousel() {
  const [pageNumber, setPageNumber] = useState(0);

  const handleOnClickIncrement = () => {
    if (pageNumber === 3) {
      setPageNumber(0);
    } else {
      setPageNumber(pageNumber + 1);
    }
  };

  const handleOnClickDecrement = () => {
    if (pageNumber === 0) {
      setPageNumber(3);
    } else {
      setPageNumber(pageNumber - 1);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url("${carouselRoutes[pageNumber]} `,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="carousel-container"
    >
      <img
        className="arrowBtn left"
        src="\HomePageLogos\carouselArrow.png"
        alt=""
        onClick={handleOnClickDecrement}
      />
      <img
        className="arrowBtn right"
        src="\HomePageLogos\carouselArrow.png"
        alt=""
        onClick={handleOnClickIncrement}
      />

      <img
        className="carouselLogoOnTop"
        src="/HomePageLogos/CarouselPhotos/carouselLogoOnTop.png"
        alt=""
      />
    </div>
  );
}
