/* eslint-disable react/no-unescaped-entities */
import "./ProjectBeezSmartStyles.css";

export default function ProjectBeezSmart() {
  return (
    <section>
      {/* Project Logo */}
      <div className="projects-logo-container">
        <img loading="lazy" className="projects-img" src="/ProjectsPageLogos/ProjectsMainLogo.png" alt="Projects Main Logo" />
      </div>

      {/* Header Section */}
      <div className="beezSmart-header-section">
        <div className="beez-titleSection">
          <h1>Proiectul "Beez SMART"</h1>
          <p className="beez-titleSection-Location">Gârbovi, Ialomița</p>
          <p className="beez-titleSection-Year">2024 - 2025</p>
          <img className="beezSmartMainLogo" src="/BeezSmartProjectPhotos/beeMainLogo.png" alt="" />
        </div>
        <p className="beezSmart-header-section-description">
          Proiectul „Beez SMART" a fost inițiat de 5 tineri din județul Ialomița, motivați să susțină educația copiilor și
          tinerilor din comuna Gârbovi. Într-o comunitate cu resurse limitate și acces redus la oportunități educaționale
          alternative, echipa Beez propune activități care încurajează creativitatea, încrederea în sine și luarea deciziilor.
          Scopul proiectului este de a contribui la prevenirea riscului de abandon școlar, oferind copiilor sprijin emoțional,
          modele pozitive și un spațiu sigur în care să se dezvolte.
        </p>
      </div>

      {/* Section One */}
      <div className="beezSmart-section-one">
        <img src="/BeezSmartProjectPhotos/beezSmart_section2_photo1.jpg" loading="lazy" alt="left" />
        <div className="beezSmart-section-one-text-wrapper">
          <p>Despre Comuna Gârbovi și inițiativa Beez SMART</p>
          <p>
            Comuna Gârbovi din județul Ialomița este o comunitate rurală activă, cu tineri curioși și dornici să învețe. Ca în
            multe alte zone din țară, provocările legate de distanța față de orașe, accesul la activități variate sau sprijinul
            educațional suplimentar pot influența parcursul școlar al elevilor. Din dorința de a susține elevii din această
            localitate și de a crea un spațiu în care învățarea să fie mai atractivă, cinci tineri au inițiat proiectul Beez
            SMART. Prin metode non-formale, ateliere creative și activități în echipă, proiectul a oferit copiilor încredere,
            motivație și sentimentul că nu sunt singuri pe drumul lor.
          </p>
        </div>
        <img loading="lazy" src="/BeezSmartProjectPhotos/beezSmart_section2_photo2.jpg" alt="" />
      </div>

      {/* Beehive Section */}
      <div className="beezSmart-section-two">
        <div className="beeLogos-and-text-container">
          <p>
            Scopul proiectului este de a crește motivația pentru educație, de a dezvolta abilități personale și sociale, și de a
            crea un mediu incluziv, în care fiecare copil se simte ascultat, respectat și susținut.
          </p>
          <img className="beeImage-right" src="/BeezSmartProjectPhotos/bee_right.png" alt="bee right" />
        </div>
        <div className="beehive-grid">
          {/* Top row */}
          <div className="hex-row hex-row-top">
            <div className="hex">
              <img src="/BeezSmartProjectPhotos/beeHive-top.jpg" alt="Top" />
            </div>
          </div>

          {/* Middle row */}
          <div className="hex-row offset">
            <div className="hex">
              <img src="/BeezSmartProjectPhotos/beeHive-left.jpg" alt="Left" />
            </div>
            <div className="hex">
              <p></p>
              <img src="/BeezSmartProjectPhotos/beeHive-right.jpg" alt="Right" />
            </div>
          </div>

          {/* Bottom row */}
          <div className="hex-row hex-row-bottom">
            <div className="hex">
              <img src="/BeezSmartProjectPhotos/beeHive-bottom.jpg" alt="Bottom" />
            </div>
          </div>
        </div>
        <div className="beeLogos-and-text-container">
          <p>
            „Beez SMART” înseamnă încredere, curaj și solidaritate, dar mai ales un pas înainte către un viitor mai bun pentru
            fiecare copil care are nevoie doar de un context potrivit ca să strălucească.
          </p>
          <img className="beeImage-left" src="/BeezSmartProjectPhotos/bee_left.png" alt="bee left" />
        </div>
      </div>

      {/* Activities & Impact */}
      <div className="beezSmart-section-two-and-a-half">
        <div className="beezSmart-column">
          <h1 className="beezSmart-title">Ce au făcut copiii în cadrul proiectului?</h1>
          <ul className="beezSmart-list">
            <li className="beezSmart-list-item">
              Au participat la 16 ateliere non-formale centrate pe lucrul în echipă, exprimare liberă, ecologie, dezvoltare
              personală și civică.
            </li>
            <li className="beezSmart-list-item">
              Au învățat cum să își gestioneze emoțiile, să comunice mai ușor, să își descopere talentele și să se simtă parte
              dintr-un grup.
            </li>
            <li className="beezSmart-list-item">
              S-au implicat în activități creative, interactive și practice, care au dus la o creștere vizibilă a încrederii în
              sine și a dorinței de a merge mai departe cu școala.
            </li>
            <li className="beezSmart-list-item">
              Au realizat campanii vizuale anti-bullying și au creat un cod de conduită pentru o școală mai sigură și incluzivă.
            </li>
            <li className="beezSmart-list-item">
              Au organizat un eveniment cultural intitulat „Gârbovi Show", în cadrul căruia au scris texte, au interpretat creații
              literare, au compus poezii și au realizat desene, celebrând astfel diversitatea creativă a comunității lor.
            </li>
          </ul>
        </div>

        <div className="beezSmart-column">
          <h1 className="beezSmart-title">Impactul proiectului:</h1>
          <ul className="beezSmart-list">
            <li className="beezSmart-list-item">
              Peste 75% dintre participanți declară că, în urma activităților, înțeleg mult mai bine cât de valoroasă este
              educația și rolul pe care aceasta îl joacă în viitorul lor personal și profesional.
            </li>
            <li className="beezSmart-list-item">
              86% dintre tineri spun că își doresc cu adevărat să continue studiile și să meargă la liceu, un semnal clar că
              sprijinul oferit în cadrul proiectului i-a ajutat să-și regândească parcursul educațional cu încredere.
            </li>
            <li className="beezSmart-list-item">
              100% dintre participanți și-au exprimat dorința de a se implica în proiecte similare în viitor, nu doar ca
              beneficiari, ci și ca voluntari, promotori sau organizatori. Aceasta arată că „BEEZ SMART" a reușit nu doar să
              inspire, ci să și creeze o comunitate de tineri activi, curajoși și dornici să contribuie mai departe.
            </li>
          </ul>
        </div>
      </div>

      {/* Section Three */}
      <div className="beezSmart-section-three">
        <img loading="lazy" alt="left" src="/BeezSmartProjectPhotos/beezSmart_section3_left.jpg" />
        <img loading="lazy" src="/BeezSmartProjectPhotos/beezSmart_section3_middle.jpg" alt="middle" />
        <img loading="lazy" src="/BeezSmartProjectPhotos/beezSmart_section3_right.jpg" alt="right" />
      </div>

      {/* Testimonials */}
      <div className="beezSmart-testimonials-section">
        <h2>Testimoniale participanților:</h2>
        <div className="beezSmart-testimonials-container">
          <div className="testimonial">
            <p>
              „Din punctul meu de vedere, proiectul acesta este unul foarte frumos și sper că va continua. Aceste ore pe care
              le-am făcut au fost foarte frumoase și pline de momente minunate. Eu una apreciez foarte mult acest lucru, deoarece
              știu cât de mult au lucrat cu noi și vă mulțumesc din suflet pentru timpul, atenția, dar și sprijinul acordat."
            </p>
          </div>
          <div className="testimonial">
            <p>
              „Vrem să vă mulțumim că ne-ați oferit încrederea si ne-ați fost alaturi în fiecare moment al vieții. Sperăm că ne
              vom mai vedea și anul viitor, ne-am atașat enorm și ne-ați oferit emoții pozitive de fiecare dată. Vă iubim!"
            </p>
          </div>
          <div className="testimonial">
            <p>
              „Vă mulțumim din suflet că ați venit la noi în școală și ne-ați prezentat proiectul vostru minunat, Beez SMART.
              Prezența voastră a fost o adevărată inspirație pentru toți cei implicați. Prin modul în care ne-ați implicat în
              activități și prin felul în care ne-ați făcut să ne simțim, ne-ați creat o atmosferă caldă, primitoare, care ne-a
              făcut să simțim că suntem acasă."
            </p>
          </div>
        </div>
      </div>
      <div className="beezSmart-bottom-section">
        <p>Proiect finanțat de:</p>
        <img className="europoLogo" src="/BeezSmartProjectPhotos/europaLogo.png" alt="" />
        <div>
          <p>Pentru mai multe informații despre proiect, vă rugăm să accesați următorul link: </p>
          <p className="link-pdf">
            <a className="link-pdf" href="/BeezSmartProjectPhotos/raport_SMART.pdf" target="_blank" rel="noopener noreferrer">
              Link pdf
            </a>
          </p>
        </div>

        <div>
          <p>Apariții în presă:</p>

          <p>
            Evenimentul „Vernisaj de Crăciun” -{" "}
            <a
              className="press-links"
              href="https://www.independentonline.ro/2024/12/20/-Vernisaj-de-Craciun--la-Scoala-Gimnaziala-Garbovi-30629?fbclid=IwY2xjawLjFrNleHRuA2FlbQIxMQABHv8Ojp-luRscdMYw9Mer2WNzTQtWkiIiqOVDyAidxwlUuSMWUUGAJAw7tgMc_aem_iXo3lvHqgwVlEIepJcCGvQ "
              target="_blank"
            >
              {" "}
              https://shorturl.at/NBoYE
            </a>
          </p>
          <p>
            Evenimentul „Gârbovi Show” -{" "}
            <a
              target="_blank"
              className="press-links"
              href="https://obiectiv.net/garbovi-show-eveniment-cultural-organizat-de-copii-o-adevarata-lectie-de-creativitate-si-implicare-84199.html/?fbclid=IwY2xjawLjGYBleHRuA2FlbQIxMQABHhpEbTZNGtwG6ekDfwWUUJ8LDHhv3NBARdyX6fSm8R1pEjQcpKlChCWvjwhm_aem_bQQG6WDdnFuFJZN7oAl7Fg"
            >
              {" "}
              https://shorturl.at/KAJAX
            </a>
          </p>
        </div>
        <div>
          <p>
            <a href="https://www.facebook.com/profile.php?id=61568141861699">
              <img className="facebookLogo-beez" src="/BeezSmartProjectPhotos/icons8-facebook-60.png" alt="" />
            </a>
          </p>

          <a href="https://youtu.be/DS2joyErd9s?feature=shared">
            <img className="yotubeLogo-beez" src="/BeezSmartProjectPhotos/icons8-youtube-50.png" alt="" />
          </a>
        </div>
      </div>
    </section>
  );
}
