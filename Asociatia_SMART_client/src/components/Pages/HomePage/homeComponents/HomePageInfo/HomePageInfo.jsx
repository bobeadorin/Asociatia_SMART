import "./HomePageInfoStyles.css";
import homePageInfoText from "./homePageInfoText.js";

export default function HomePageInfo() {
  return (
    <section className="homePageInfo-container">
      <div className="text-wrapper">
        <img src={homePageInfoText.firstImgPath} alt="" />
        <h3 className="donateInfo-title">{homePageInfoText.firstH}</h3>
        <p>{homePageInfoText.firstP}</p>
      </div>
      <div className="text-wrapper">
        <img src={homePageInfoText.secondImgPath} alt="" />
        <h3>{homePageInfoText.secondH}</h3>
        <p>{homePageInfoText.secondP}</p>
      </div>
    </section>
  );
}
