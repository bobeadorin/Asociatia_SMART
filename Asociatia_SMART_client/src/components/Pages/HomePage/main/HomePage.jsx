import PhotoCarousel from "../homeComponents/PhotoCarousel/PhotoCarousel";
import ReasonSectionHome from "../homeComponents/homePageOurReasonSection/ReasonSectionHome";
import ImgSection from "../../../UtilityComponents/ImageSections/ImgSection";
import HomePageLogo from "/HomePageLogos/HomePageLogo.png";
import HomePageInfo from "../homeComponents/HomePageInfo/HomePageInfo";

export default function HomePage() {
  return (
    <div>
      <PhotoCarousel />
      <ReasonSectionHome />
      <ImgSection url={HomePageLogo} />
      <HomePageInfo />
    </div>
  );
}
