import "./HeaderStyles.css";

export default function Header() {
  return (
    <header className="headerWrapper">
      <div className="header-div-container">
        <div className="header-info-wrapper" id="left-wrapper">
          <img
            className="header-logos"
            src="/sharedLogos/HeaderPhoneLogo.png"
            alt=""
          />
          <span className="header-info-span"> +40 774 683 032</span>
        </div>

        <div className="header-info-wrapper" id="right-wrapper">
          <img
            className="header-logos"
            src="/sharedLogos/mailLogo.png"
            alt=""
          />
          <span id="header-mailSpan" className="header-info-span">
            contact.asociatiasmart@gmail.com
          </span>
        </div>
      </div>
      <div className="header-logoContainers">
        <a
          href="https://www.facebook.com/profile.php?id=61556478462754"
          id="purpleLogos"
          target="_blank"
        >
          <img src="/sharedLogos/facebookLogoPurple.png" alt="" />
        </a>
        <a
          href="https://www.instagram.com/asociatiasmart/"
          id="purpleLogos"
          target="_blank"
        >
          <img src="/sharedLogos/instaPurpleLogo.png" alt="" />
        </a>
      </div>
    </header>
  );
}
