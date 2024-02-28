import "./FooterStyles.css";

export default function Footer() {
  return (
    <footer className="footer-container">
      <img
        className="footerSmartLogo"
        src="/sharedLogos/FooterSmartLogo.png"
        alt=""
      />
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
