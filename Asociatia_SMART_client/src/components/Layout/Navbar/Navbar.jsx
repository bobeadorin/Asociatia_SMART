import "./NavbarStyles.css";
import { Link } from "react-router-dom";
import routes from "./navRoutes";
import { useState } from "react";

export default function Navbar() {
  const [isClosed, setIsClosed] = useState(false);

  return (
    <nav className="navbar-container">
      <img
        className="Smart-logo"
        src="/sharedLogos/SmartLogo.png"
        alt="HambugerMenu"
      />
      <img
        className="menuLogo"
        id="openMenuBtn"
        src={
          isClosed
            ? "/sharedLogos/closeIcon.png"
            : "/sharedLogos/hamburgerManuIcon.png"
        }
        alt="menuLogo"
        onClick={() => setIsClosed(!isClosed)}
      />
      <div className={isClosed ? "routes-container" : "closed"}>
        <img
          className="menuLogo"
          id="closeBtn"
          src="/sharedLogos/closeIcon.png"
          alt="CloseBtn"
          onClick={() => setIsClosed(!isClosed)}
        />
        <div className="navbar-route-btns-container">
          <Link to={routes.homePage}>Acasa</Link>
        </div>
        <div className="navbar-route-btns-container">
          <Link to={routes.aboutUs}>Despre noi</Link>
        </div>
        <div className="navbar-route-btns-container">
          <Link to={routes.projects}>Proiecte</Link>
        </div>
        <div className="navbar-route-btns-container">
          <Link to={routes.becomeVol}>Fii voluntar</Link>
        </div>
        <div className="navbar-route-btns-container">
          <Link to={routes.donate}>Donează</Link>
        </div>
        <div className="navbar-route-btns-container">
          <Link to={routes.contact}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}
