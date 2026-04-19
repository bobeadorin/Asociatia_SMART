import "./NavbarStyles.css";
import { Link, useNavigate } from "react-router-dom";
import routes from "./navRoutes";
import { useState, useRef, useEffect } from "react";
import { useLanguage } from "../../../hooks/useLanguage";

export default function Navbar() {
  const { strings } = useLanguage();
  const [isClosed, setIsClosed] = useState(false);
  const [activeLink, setActiveLink] = useState(routes.homePage);
  const navigate = useNavigate();
  const menuRef = useRef();

  const handleLinkClick = (route) => {
    setActiveLink(route);
    setIsClosed(false);
  };

  const handleHomeLogoClick = () => {
    navigate("/");
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setIsClosed(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <nav ref={menuRef} className="navbar-container">
      <img className="Smart-logo" src="/sharedLogos/SmartLogo.png" alt="HambugerMenu" onClick={handleHomeLogoClick} />
      <img
        className="menuLogo"
        id="openMenuBtn"
        src={isClosed ? "/sharedLogos/closeIcon.png" : "/sharedLogos/hamburgerManuIcon.png"}
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
          <Link
            style={{ color: activeLink === routes.homePage ? "blue" : "" }}
            to={routes.homePage}
            onClick={() => handleLinkClick(routes.homePage)}
          >
            {strings.navigationText.navbar.home}
          </Link>
        </div>
        <div className="navbar-route-btns-container">
          <Link
            style={{ color: activeLink === routes.aboutUs ? "blue" : "" }}
            to={routes.aboutUs}
            onClick={() => handleLinkClick(routes.aboutUs)}
          >
            {strings.navigationText.navbar.aboutUs}
          </Link>
        </div>
        <div className="navbar-route-btns-container">
          <Link
            style={{ color: activeLink === routes.projects ? "blue" : "" }}
            to={routes.projects}
            onClick={() => handleLinkClick(routes.projects)}
          >
            {strings.navigationText.navbar.projects}
          </Link>
        </div>
        <div className="navbar-route-btns-container">
          <Link
            style={{ color: activeLink === routes.becomeVol ? "blue" : "" }}
            to={routes.becomeVol}
            onClick={() => handleLinkClick(routes.becomeVol)}
          >
            {strings.navigationText.navbar.becomeVolunteer}
          </Link>
        </div>
        <div className="navbar-route-btns-container">
          <Link
            style={{ color: activeLink === routes.donate ? "blue" : "" }}
            to={routes.donate}
            onClick={() => handleLinkClick(routes.donate)}
          >
            {strings.navigationText.navbar.donate}
          </Link>
        </div>
        <div className="navbar-route-btns-container">
          <Link
            style={{ color: activeLink === routes.contact ? "blue" : "" }}
            to={routes.contact}
            onClick={() => handleLinkClick(routes.contact)}
          >
            {strings.navigationText.navbar.contact}
          </Link>
        </div>
      </div>
    </nav>
  );
}
