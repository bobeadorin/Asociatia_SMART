import "./AboutUsStyles.css";
import ImgSection from "../../../UtilityComponents/ImageSections/ImgSection.jsx";
import TextCard from "../aboutUsComponents/textCard/TextCard";
import { useLanguage } from "../../../../hooks/useLanguage";

export default function AboutUs() {
  const { strings } = useLanguage();
  const { aboutCard, missionCard, visionCard, valuesSection } = strings.aboutUsText;

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
          text={aboutCard}
        />
        <TextCard
          styles={{
            position: "absolute",
            top: "30%",
            right: "7%",
            zIndex: "1",
            backgroundColor: "#a9acfa",
          }}
          text={missionCard}
        />
        <TextCard
          styles={{
            position: "absolute",
            top: "60%",
            left: "10%",
            zIndex: "2",
            backgroundColor: "#5a92ff",
          }}
          text={visionCard}
        />
      </section>
      <div className="values-aboutUs-section">
        <div className="values-aboutUs-header-container">
          <h2>{valuesSection.title}</h2>
          <hr />
        </div>
        <div className="values-aboutUs-p-container">
          {Object.values(valuesSection.values).map((value) => (
            <p key={value.label}>
              <b>{value.label} </b>
              {value.description}
            </p>
          ))}
        </div>
      </div>
      <ImgSection url="/AboutUsPageLogos/aboutUsBottomPhoto.png" />
    </section>
  );
}
