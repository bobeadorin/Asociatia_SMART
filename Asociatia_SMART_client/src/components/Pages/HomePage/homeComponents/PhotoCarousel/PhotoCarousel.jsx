import "./PhotoCarouselStyles.css";
import { useState, useEffect } from "react";
import carouselRoutes from "./carouselImgRoutes.js";

export default function PhotoCarousel() {
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPageNumber((prev) => (prev + 1) % carouselRoutes.length); // Use modulo to loop through carouselRoutes
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

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
        className="carouselLogoOnTop"
        src="/HomePageLogos/CarouselPhotos/carouselLogoOnTop.png"
        alt=""
      />
    </div>
  );
}
