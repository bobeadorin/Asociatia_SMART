import "../TermsAndConditions/TermsAndConditionsStyles.css";

export default function ConfidentialityPolicy() {
  return (
    <article className="termsAndConditions-container">
      <section className="terms-content-wrapper">
        <h1 className="terms-section-title">
          Mulțumim pentru că ați ales să vă conectați cu Asociația SMART.
        </h1>
        <p className="terms-starting-p">
          Această politică de confidențialitate explică cum colectăm, utilizăm,
          protejăm și dezvăluim informațiile dvs. în timpul utilizării site-ului
          nostru și a serviciilor asociate.
        </p>

        <h2 className="terms-titles">1. Informații Colectate</h2>
        <p className="terms-subTitles">
          <strong>Informații Personale:</strong>
        </p>
        <ul className="terms-text-wrapper">
          <li className="terms-normalText">Numele și prenumele</li>
          <li className="terms-normalText">Adresa de e-mail</li>
          <li className="terms-normalText">Numărul de telefon</li>
          <li className="terms-normalText">
            Alte informații pe care le furnizați voluntar prin formulare sau
            corespondență.
          </li>
        </ul>
        <p className="terms-subTitles">
          <strong>Informații de Utilizare:</strong>
        </p>
        <ul className="terms-text-wrapper">
          <li className="terms-normalText">Adresa IP</li>
          <li className="terms-normalText">
            Dispozitivul și browser-ul utilizat
          </li>
          <li className="terms-normalText">
            Paginile vizitate pe site-ul nostru
          </li>
        </ul>

        <h2 className="terms-titles">2. Scopul Colectării Informațiilor</h2>
        <p className="terms-text-wrapper">
          Informațiile colectate sunt utilizate în principal pentru:
        </p>
        <ul className="terms-text-wrapper">
          <li className="terms-normalText">
            Contactarea și răspunsul la solicitările dvs.
          </li>
          <li className="terms-normalText">
            Îmbunătățirea și personalizarea experienței dvs. pe site.
          </li>
          <li className="terms-normalText">
            Furnizarea de informații despre evenimente, programe și campanii
            relevante.
          </li>
          <li className="terms-normalText">
            Analiza și îmbunătățirea serviciilor noastre.
          </li>
        </ul>

        <h2 className="terms-titles">
          3. Păstrarea și Securitatea Informațiilor
        </h2>
        <p className="terms-text-wrapper">
          Informațiile dvs. personale sunt păstrate în condiții de siguranță și
          confidențialitate. Implementăm măsuri tehnice și organizatorice pentru
          a proteja împotriva accesului neautorizat sau a utilizării incorecte.
        </p>

        <h2 className="terms-titles">4. Partajarea Informațiilor</h2>
        <p className="terms-text-wrapper">
          Nu vom partaja, vinde sau închiria informațiile dvs. personale
          terțelor părți fără consimțământul dvs., cu excepția cazurilor în care
          acest lucru este necesar în conformitate cu legea.
        </p>

        <h2 className="terms-titles">
          5. Drepturile Dvs. cu Privire la Informații
        </h2>
        <p className="terms-text-wrapper">
          Aveți dreptul să solicitați acces, corectare, ștergere sau
          restricționarea utilizării informațiilor dvs. personale. Ne puteți
          contacta pentru a exercita aceste drepturi.
        </p>

        <h2 className="terms-titles">6. Cookie-uri și Tehnologii Similare</h2>
        <p className="terms-text-wrapper">
          Site-ul nostru utilizează cookie-uri și tehnologii similare pentru a
          îmbunătăți funcționalitatea și experiența utilizatorului. Prin
          utilizarea site-ului, sunteți de acord cu utilizarea acestor
          tehnologii.
        </p>

        <h2 className="terms-titles">
          7. Modificări la Politica de Confidențialitate
        </h2>
        <p className="terms-text-wrapper">
          Ne rezervăm dreptul de a modifica această politică de
          confidențialitate. Orice modificări vor fi publicate pe această
          pagină.
        </p>

        <h2 className="terms-titles">8. Contact</h2>
        <p className="terms-text-wrapper">
          Dacă aveți întrebări sau preocupări cu privire la această politică de
          confidențialitate,
          <p>vă rugăm să ne contactați la adresa:</p>
          <a href="mailto:contact.asociatiasmart@gmail.com">
            contact.asociatiasmart@gmail.com
          </a>
          .
        </p>

        <p className="terms-text-wrapper">
          Prin utilizarea site-ului nostru, sunteți de acord cu această politică
          de confidențialitate.
        </p>
      </section>
    </article>
  );
}
