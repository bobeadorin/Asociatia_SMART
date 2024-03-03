import "./FooterStyles.css";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-logo-info-container">
        <img
          className="footerSmartLogo"
          src="/sharedLogos/FooterSmartLogo.png"
          alt=""
        />
        <div className="footer-media-logos">
          <a href="">
            <img
              className="media-logo-Fo"
              src="public\sharedLogos\whiteFacebookLogo.png"
              alt=""
            />
          </a>
          <a href="">
            <img
              className="media-logo-Fo"
              src="public\sharedLogos\whiteInstagramLogo.png"
              alt=""
            />
          </a>
        </div>
      </div>

      <div>
        <p className="infoTitle-footer-p">Informații utile:</p>
        <span className="arrowed-text">
          <img src="/sharedLogos/arrow.png" alt="" />
          <p>Politica de confidențialitate</p>
        </span>
        <span className="arrowed-text">
          <img src="/sharedLogos/arrow.png" alt="" />
          <p>Termenii și condițiile</p>
        </span>
      </div>
    </footer>
  );
}
