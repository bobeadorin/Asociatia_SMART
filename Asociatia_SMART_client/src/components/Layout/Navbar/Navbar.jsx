import "./NavbarStyles.css";
import { Link, useNavigate } from "react-router-dom";
import routes from "./navRoutes";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [isClosed, setIsClosed] = useState(false);
  const [activeLink, setActiveLink] = useState(routes.homePage);
  const navigate = useNavigate();
  const menuRef = useRef();

  const handleLinkClick = (route) => {
    setActiveLink(route);
  };

  const handleHomeLogoClick = () => {
    navigate("/");
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      console.log(menuRef.current);
      if (!menuRef.current.contains(e.target)) {
        setIsClosed(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <nav ref={menuRef} className="navbar-container">
      <img
        className="Smart-logo"
        src="/sharedLogos/SmartLogo.png"
        alt="HambugerMenu"
        onClick={handleHomeLogoClick}
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
          <Link
            style={{ color: activeLink === routes.homePage ? "blue" : "" }}
            to={routes.homePage}
            onClick={() => handleLinkClick(routes.homePage)}
          >
            ACASĂ
          </Link>
        </div>
        <div className="navbar-route-btns-container">
          <Link
            style={{ color: activeLink === routes.aboutUs ? "blue" : "" }}
            to={routes.aboutUs}
            onClick={() => handleLinkClick(routes.aboutUs)}
          >
            DESPRE NOI
          </Link>
        </div>
        <div className="navbar-route-btns-container">
          <Link
            style={{ color: activeLink === routes.projects ? "blue" : "" }}
            to={routes.projects}
            onClick={() => handleLinkClick(routes.projects)}
          >
            PROIECTE
          </Link>
        </div>
        <div className="navbar-route-btns-container">
          <Link
            style={{ color: activeLink === routes.becomeVol ? "blue" : "" }}
            to={routes.becomeVol}
            onClick={() => handleLinkClick(routes.becomeVol)}
          >
            FII VOLUNTAR
          </Link>
        </div>
        <div className="navbar-route-btns-container">
          <Link
            style={{ color: activeLink === routes.donate ? "blue" : "" }}
            to={routes.donate}
            onClick={() => handleLinkClick(routes.donate)}
          >
            DONEAZĂ
          </Link>
        </div>
        <div className="navbar-route-btns-container">
          <Link
            style={{ color: activeLink === routes.contact ? "blue" : "" }}
            to={routes.contact}
            onClick={() => handleLinkClick(routes.contact)}
          >
            CONTACT
          </Link>
        </div>
      </div>
    </nav>
  );
}
