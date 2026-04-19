import "./ReasonSectionHomeStyles.css";
import { useLanguage } from "../../../../../hooks/useLanguage";

export default function ReasonSectionHome() {
  const { strings } = useLanguage();
  const { title, description } = strings.homePageText.reasonSection;

  return (
    <section className="homepage-ourReasonSection">
      <div className="reasonSection-text-container">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <img src="/HomePageLogos/ReasonSectionLogo.png" alt="" />
    </section>
  );
}
