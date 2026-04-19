import "./BecomeVolStyles.css";
import ImgSection from "../../../UtilityComponents/ImageSections/ImgSection";
import { useLanguage } from "../../../../hooks/useLanguage";

export default function BecomeVol() {
  const { strings } = useLanguage();
  const { header, introDescription, whyJoinSection } = strings.becomeVolunteerText;

  return (
    <section>
      <ImgSection url="/BecomeVolLogos/BecomeVolLogo.png" />
      <div className="BecomeVolunteer-wrapper">
        <h1>{header}</h1>
        <p>{introDescription}</p>
        <h2>{whyJoinSection.sectionTitle}</h2>
        <hr style={{ width: "100%" }} />
        <section className="text-section-sideImg">
          <div>
            <h2>{whyJoinSection.realImpact.heading}</h2>
            <p>{whyJoinSection.realImpact.description}</p>

            <h2>{whyJoinSection.valuableExperience.heading}</h2>
            <p>{whyJoinSection.valuableExperience.description}</p>
            <h2>{whyJoinSection.unitedCommunity.heading}</h2>

            <p>{whyJoinSection.unitedCommunity.description}</p>
            <p>
              {whyJoinSection.enrollmentInfo}
            </p>
          </div>
          <img src="/BecomeVolLogos/SideLogo.png" alt="" />
        </section>
      </div>
    </section>
  );
}
