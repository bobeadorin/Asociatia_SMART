import "./TaxRedirectInfoPannelStyles.css";

export default function TaxRedirectInfoPannel() {
  return (
    <section className="taxRedirect-section">
      <img
        className="taxRedirect-img"
        src="/DonatePageLogos/Donate_GirlOnASwingLogo.png"
        alt="logo"
      />
      <div className="taxRedirect-div-wrapper">
        <h1 className="taxRedirect-section-title">
          Redirecționează 3,5% din Impozitul pe Venit: Un act simplu cu un
          Impact Imens
        </h1>
        <p>
          Fiecare 3,5% din impozitul pe venit pe care îl redirecționezi către
          Asociația SMART reprezintă o investiție directă în viitorul
          educațional și cultural al comunităților rurale. Prin această gestă
          simplă, contribui la:
        </p>
        <div className="taxRedirect-numberedText-div">
          <p>
            1.Acces la educație de calitate: Oferim resurse, programe și
            facilități pentru a asigura că fiecare copil din mediul rural are
            acces la o educație de calitate, construind baze solide pentru
            viitorul lor.
          </p>
          <p>
            2.Promovarea culturii locale: Conservăm tradițiile, susținem
            artiștii și promovăm evenimente culturale care îmbogățesc și
            păstrează identitatea culturală a comunităților rurale.
          </p>
          <p>
            3.Dezvoltarea sustenabilă: Investim în proiecte și inițiative care
            contribuie la dezvoltarea durabilă a comunităților, creând un mediu
            propice pentru creșterea și prosperitatea pe termen lung.
          </p>
        </div>
        <p>
          Prin redirecționarea impozitului tău către Asociația SMART, devii un
          arhitect al schimbării, contribuind la transformarea reală a vieților
          și a comunităților. Un mic gest cu un impact uriaș! Redirecționează
          acum și construiește viitorul împreună cu noi!
        </p>
      </div>
    </section>
  );
}
