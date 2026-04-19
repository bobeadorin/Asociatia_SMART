import "./TaxRedirectInfoPannelStyles.css";
import { useLanguage } from "../../../../hooks/useLanguage";

export default function TaxRedirectInfoPannel() {
  const { strings } = useLanguage();
  const { title, intro, benefits, callToAction } = strings.donateText.taxRedirect;

  return (
    <section className="taxRedirect-section">
      <img
        className="taxRedirect-img"
        src="/DonatePageLogos/Donate_GirlOnASwingLogo.png"
        alt="logo"
      />
      <div className="taxRedirect-div-wrapper">
        <h1 className="taxRedirect-section-title">{title}</h1>
        <p>{intro}</p>
        <div className="taxRedirect-numberedText-div">
          <p>
            {benefits.qualityEducation.number}.{benefits.qualityEducation.title} {benefits.qualityEducation.description}
          </p>
          <p>
            {benefits.localCulture.number}.{benefits.localCulture.title} {benefits.localCulture.description}
          </p>
          <p>
            {benefits.sustainableDevelopment.number}.{benefits.sustainableDevelopment.title} {benefits.sustainableDevelopment.description}
          </p>
        </div>
        <p>{callToAction}</p>
      </div>
    </section>
  );
}
