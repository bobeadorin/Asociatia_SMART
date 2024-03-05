import "./DonateStyles.css";
import ImgSection from "../../../UtilityComponents/ImageSections/ImgSection";
import TaxRedirectInfoPannel from "../donateComponents/TaxRedirectInfoPannel";
export default function Donate() {
  return (
    <article>
      <ImgSection url="/DonatePageLogos/DonateMainLogo.png" />
      <div className="dontate-firstSection">
        <h1>Apel pentru Donații: Construim Un Viitor Mai Luminos</h1>
        <p>
          Fiecare donație contează și este un pas către schimbarea pozitivă în
          viețile copiilor și tinerilor din comunitățile rurale.{" "}
        </p>
      </div>
      <section className="donate-secondSection">
        <div>
          <img src="/DonatePageLogos/DonateBalanceLogo.png" alt="" />
          <p>
            Dacă ești persoană juridică poți redirecționa 20% din impozitul pe
            profit datorat statului
          </p>
        </div>
        <div>
          <img src="/DonatePageLogos/DonatePaperPlaneLogo.png" alt="" />
          <p>
            Donează prin Trasfer Bancar direct în contul Asociației S.M.A.R.T.
            <b>IBAN: RO73RNCB0174155218880001</b>
          </p>
        </div>
      </section>
      <section className="whyDonate-section">
        <div className="whyDonate-header-wrapper">
          <hr />
          <h2>De ce sa donezi?</h2>
          <hr />
        </div>
        <div>
          <p>
            <b>Educație este cheia:</b> Donațiile tale sprijină programe
            educaționale care deschid noi orizonturi pentru copii și tineri. O
            șansă la educație de calitate este o cale sigură către un viitor mai
            luminos.
          </p>
          <p>
            <b>Reducerea sărăciei:</b> Fondurile strânse sunt direcționate către
            proiecte care susțin dezvoltarea economică în comunitățile rurale,
            oferind o mână de ajutor familiilor defavorizate și contribuind la
            reducerea sărăciei.
          </p>
          <p>
            <b>Impact tangibil:</b> Fiecare contribuție are un impact direct și
            tangibil asupra vieților celor care au mai puține resurse. Vei vedea
            rezultatele eforturilor tale sub forma unui progres palpabil în
            comunități.
          </p>
          <p>
            <b>Solidaritate și Comunitate:</b> Prin donații, devii parte a unei
            comunități de susținători dedicată schimbării. Solidaritatea noastră
            colectivă este cheia pentru a crea un impact semnificativ și
            durabil.
          </p>
          <p>
            <b>Investiție în viitor:</b> Fiecare donație nu este doar o
            investiție în prezent, ci și în viitorul comunităților rurale. O
            comunitate educată și prosperă contribuie la o societate mai
            echitabilă și sustenabilă.
          </p>
        </div>
      </section>
      <TaxRedirectInfoPannel />
    </article>
  );
}
