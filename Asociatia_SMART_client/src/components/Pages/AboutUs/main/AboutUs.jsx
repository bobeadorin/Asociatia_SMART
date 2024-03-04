import "./AboutUsStyles.css";
import ImgSection from "../../../UtilityComponents/ImageSections/ImgSection.jsx";
import TextCard from "../aboutUsComponents/textCard/TextCard";
import { firstCard, secondCard, thirdCard } from "./aboutUsTextContent.js";
export default function AboutUs() {
  return (
    <section>
      <ImgSection url="/AboutUsPageLogos/aboutUsTopPhoto.png" />
      <section className="aboutUs-card-container">
        <TextCard
          styles={{
            position: "absolute",
            left: "10%",
            zIndex: "-1",
            backgroundColor: "#38b6ff",
          }}
          text={firstCard}
        />
        <TextCard
          styles={{
            position: "absolute",
            top: "30%",
            right: "7%",
            zIndex: "1",
            backgroundColor: "#a9acfa",
          }}
          text={secondCard}
        />
        <TextCard
          styles={{
            position: "absolute",
            top: "60%",
            left: "10%",
            zIndex: "2",
            backgroundColor: "#5a92ff",
          }}
          text={thirdCard}
        />
      </section>
      <ImgSection url="/AboutUsPageLogos/aboutUsBottomPhoto.png" />
    </section>
  );
}
