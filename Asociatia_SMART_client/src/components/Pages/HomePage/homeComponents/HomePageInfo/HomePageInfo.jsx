import "./HomePageInfoStyles.css";
import { useLanguage } from "../../../../../hooks/useLanguage";

export default function HomePageInfo() {
  const { strings } = useLanguage();
  const { donateSection, involveSection } = strings.homePageText;

  return (
    <section className="homePageInfo-container">
      <div className="text-wrapper">
        <img src={donateSection.firstImgPath} alt="" />
        <h3 className="donateInfo-title">{donateSection.heading}</h3>
        <p>{donateSection.description}</p>
      </div>
      <div className="text-wrapper">
        <img src={involveSection.secondImgPath} alt="" />
        <h3>{involveSection.heading}</h3>
        <p>{involveSection.description}</p>
      </div>
    </section>
  );
}
