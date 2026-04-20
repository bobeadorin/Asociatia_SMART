import { LANGUAGES } from "../../../constants/constants";
import "./HeaderStyles.css";
import { useLanguage } from "../../../hooks/useLanguage";

export default function Header() {
  const { setLanguage, strings } = useLanguage();

  return (
    <header className="headerWrapper">
      <div className="header-div-container">
        <div className="header-info-wrapper" id="left-wrapper">
          <img className="header-logos" src="/sharedLogos/HeaderPhoneLogo.png" alt="" />
          <span className="header-info-span">{strings.headerText.phone}</span>
        </div>

        <div className="header-info-wrapper" id="right-wrapper">
          <img className="header-logos" src="/sharedLogos/mailLogo.png" alt="" />
          <span id="header-mailSpan" className="header-info-span">
            {strings.headerText.email}
          </span>
        </div>
        <div className="header-info-wrapper" id="right-wrapper">
          <span id="header-mailSpan" className="header-info-span" onClick={() => setLanguage(LANGUAGES.EN)}>
            {strings.headerText.languageLabels.en}
          </span>
          <span id="header-mailSpan" className="header-info-span" onClick={() => setLanguage(LANGUAGES.RO)}>
            {strings.headerText.languageLabels.ro}
          </span>
        </div>
      </div>
      <div className="header-logoContainers">
        <a href="https://www.facebook.com/profile.php?id=61556478462754" id="purpleLogos" target="_blank">
          <img src="/sharedLogos/facebookLogoPurple.png" alt="" />
        </a>
        <a href="https://www.instagram.com/asociatiasmart/" id="purpleLogos" target="_blank">
          <img src="/sharedLogos/instaPurpleLogo.png" alt="" />
        </a>
      </div>
    </header>
  );
}
