import "./NavbarStyles.css";
import { Link } from "react-router-dom";
import routes from "./navRoutes";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isColsed, setIsClosed] = useState(false);
  useEffect(() => {
    console.log(isColsed);
  }, [isColsed]);
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
          isColsed
            ? "/sharedLogos/closeIcon.png"
            : "/sharedLogos/hamburgerManuIcon.png"
        }
        alt="menuLogo"
        onClick={() => setIsClosed(!isColsed)}
      />
      <div className={isColsed ? "routes-container" : "closed"}>
        <img
          className="menuLogo"
          id="closeBtn"
          src="/sharedLogos/closeIcon.png"
          alt="CloseBtn"
          onClick={() => setIsClosed(!isColsed)}
        />

        <Link to={routes.homePage}>Acasa</Link>
        <Link to={routes.aboutUs}>Despre noi</Link>
        <Link to={routes.projects}>Proiecte</Link>
        <Link to={routes.becomeVol}>Fii voluntar</Link>
        <Link to={routes.donate}>Donează</Link>
        <Link to={routes.contact}>Contact</Link>
      </div>
    </nav>
  );
}
