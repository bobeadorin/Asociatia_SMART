import "./TermsAndConditionsStyles.css";

export default function TermsAndConditions() {
  return (
    <article className="termsAndConditions-container">
      <section className="terms-content-wrapper">
        <h1 className="terms-section-title">
          Bun venit pe site-ul și în comunitatea Asociației SMART.
        </h1>
        <p className="terms-starting-p">
          Prin accesarea și utilizarea serviciilor noastre, sunteți de acord să
          respectați acești Termeni și Condiții. Vă rugăm să citiți cu atenție
          aceste informații.
        </p>

        <h2 className="terms-titles">1. Utilizarea Site-ului</h2>
        <p>
          <strong className="terms-subTitles">
            1.1. Accesul și Utilizarea:
          </strong>
        </p>
        <ul className="terms-text-wrapper">
          <li className="terms-normalText">
            Prin accesarea și utilizarea site-ului nostru, vă angajați să
            respectați acești Termeni și Condiții.
          </li>
          <li className="terms-normalText">
            Sunteți responsabil pentru furnizarea de informații corecte și
            actualizate în timpul utilizării serviciilor noastre.
          </li>
        </ul>
        <p>
          <strong className="terms-subTitles">
            1.2. Utilizarea Necorespunzătoare:
          </strong>
        </p>
        <ul className="terms-text-wrapper">
          <li className="terms-normalText">
            Nu sunteți permis să utilizați site-ul în scopuri ilegale sau
            neetice.
          </li>
          <li className="terms-normalText">
            Orice utilizare abuzivă a site-ului poate duce la suspendarea sau
            încetarea accesului dvs.
          </li>
        </ul>

        <h2 className="terms-titles">2. Informații Personale</h2>
        <p>
          <strong className="terms-subTitles">2.1. Confidențialitate:</strong>
        </p>
        <ul className="terms-text-wrapper">
          <li className="terms-normalText">
            Informațiile personale furnizate vor fi tratate conform Politicii de
            Confidențialitate a Asociației SMART.
          </li>
        </ul>
        <p>
          <strong className="terms-subTitles">
            2.2. Corectitudinea Informațiilor:
          </strong>
        </p>
        <ul className="terms-text-wrapper">
          <li className="terms-normalText">
            Sunteți responsabil pentru corectitudinea informațiilor personale
            furnizate și pentru menținerea acestora actualizate.
          </li>
        </ul>

        <h2 className="terms-titles">3. Conținutul Site-ului</h2>
        <p>
          <strong className="terms-subTitles">
            3.1. Drepturi de Proprietate Intelectuală:
          </strong>
        </p>
        <ul className="terms-text-wrapper">
          <li className="terms-normalText">
            Conținutul site-ului, inclusiv textele, imaginile și alte materiale,
            sunt protejate de drepturile de autor și alte legi privind
            proprietatea intelectuală.
          </li>
        </ul>
        <p>
          <strong className="terms-subTitles">
            3.2. Utilizarea Conținutului:
          </strong>
        </p>
        <ul className="terms-text-wrapper">
          <li className="terms-normalText">
            Nu aveți voie să reproduceți, distribuiți sau modificați conținutul
            site-ului fără permisiunea expresă a Asociației SMART.
          </li>
        </ul>

        <h2 className="terms-titles">4. Responsabilitate</h2>
        <p>
          <strong className="terms-subTitles">
            4.1. Exonerare de Răspundere:
          </strong>
        </p>
        <ul className="terms-text-wrapper">
          <li className="terms-normalText">
            Asociația SMART nu poate fi trasă la răspundere pentru prejudiciile
            sau pierderile survenite din utilizarea sau incapacitatea de
            utilizare a site-ului.
          </li>
        </ul>

        <h2 className="terms-titles">
          5. Modificări ale Termenilor și Condițiilor
        </h2>
        <p>
          <strong className="terms-subTitles">5.1. Actualizări:</strong>
        </p>
        <ul className="terms-text-wrapper">
          <li className="terms-normalText">
            Asociația SMART își rezervă dreptul de a modifica acești Termeni și
            Condiții în orice moment. Orice modificare va fi afișată pe site.
          </li>
        </ul>

        <h2 className="terms-titles">6. Contact</h2>
        <p>
          <strong className="terms-subTitles">
            6.1. Întrebări și Comentarii:
          </strong>
        </p>
        <ul className="terms-text-wrapper">
          <li className="terms-normalText">
            Pentru întrebări sau comentarii cu privire la acești Termeni și
            Condiții, vă rugăm să ne contactați la adresa{" "}
            <a href="mailto:contact.asociatiasmart@gmail.com">
              contact.asociatiasmart@gmail.com
            </a>
            .
          </li>
        </ul>

        <p>
          Prin utilizarea site-ului nostru, sunteți de acord cu acești Termeni
          și Condiții.
        </p>
      </section>
    </article>
  );
}
