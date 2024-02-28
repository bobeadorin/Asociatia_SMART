import "./HeaderStyles.css";

export default function Header() {
  return (
    <header className="headerWrapper">
      <div className="header-div-container">
        <div className="header-info-wrapper" id="left-wrapper">
          <img
            className="header-logos"
            src="/public/sharedLogos/HeaderPhoneLogo.png"
            alt=""
          />
          <span className="header-info-span"> +40 774 683 032</span>
        </div>

        <div className="header-info-wrapper" id="right-wrapper">
          <img
            className="header-logos"
            src="/public/sharedLogos/mailLogo.png"
            alt=""
          />
          <span id="header-mailSpan" className="header-info-span">
            contact.asociatiasmart@gmail.com
          </span>
        </div>
      </div>
      <div className="header-logoContainers">
        <img
          className="purpleLogos"
          src="/sharedLogos/facebookLogoPurple.png"
          alt=""
        />

        <img
          src="/sharedLogos/instaPurpleLogo.png"
          className="purpleLogos"
          alt=""
        />
      </div>
    </header>
  );
}
