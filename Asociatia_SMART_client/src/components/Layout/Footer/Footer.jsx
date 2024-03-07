import "./FooterStyles.css";
import { Link } from "react-router-dom";
import legalRoutes from "./legalInfoRoutes";
import routes from "../Navbar/navRoutes";

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
          <a
            href="https://www.facebook.com/profile.php?id=61556478462754"
            target="_blank"
          >
            <img
              className="media-logo-Fo"
              src="/sharedLogos/whiteFacebookLogo.png"
              alt=""
            />
          </a>
          <a href="https://www.instagram.com/asociatiasmart/" target="_blank">
            <img
              className="media-logo-Fo"
              src="/sharedLogos/whiteInstagramLogo.png"
              alt=""
            />
          </a>
        </div>
      </div>

      <div>
        <p className="infoTitle-footer-p">Informații utile:</p>
        <span className="arrowed-text">
          <img src="/sharedLogos/arrow.png" alt="" />
          <p>
            {" "}
            <Link to={legalRoutes.policyRoute}>
              Politica de confidențialitate
            </Link>
          </p>
        </span>
        <span className="arrowed-text">
          <img src="/sharedLogos/arrow.png" alt="" />
          <p>
            <Link to={legalRoutes.termsRoute}>Termeni și condiții</Link>
          </p>
        </span>
      </div>
    </footer>
  );
}
