import "./BecomeVolStyles.css";
import ImgSection from "../../../UtilityComponents/ImageSections/ImgSection";

export default function BecomeVol() {
  return (
    <section>
      <ImgSection url="public\BecomeVolLogos\BecomeVolLogo.png" />
      <div className="BecomeVolunteer-wrapper">
        <h1>Alătură-te misiunii noastre de transformare!</h1>
        <p>
          Suntem în căutarea de inimi generoase și entuziasmate care vor să facă
          parte din schimbarea pozitivă în comunitățile rurale. Dacă ai pasiunea
          pentru educație și vrei să contribui la reducerea sărăciei, te invităm
          să devii voluntar alături de noi.
        </p>
        <h2>De ce sa te alături:</h2>
        <hr style={{ width: "100%" }} />
        <section className="text-section-sideImg">
          <div>
            <h2>Impact real:</h2>
            <p>
              Fii parte a unui efort care schimbă vieți și construiește viitorul
              copiilor și tinerilor din comunitățile rurale.
            </p>

            <h2>Experiență valorizantă: </h2>
            <p>
              Dezvoltă-ți abilitățile și contribuie la proiecte care aduc
              schimbare semnificativă.
            </p>
            <h2>Comunitate unită: </h2>

            <p>
              Alătură-te unei echipe pasionate și unite, unde fiecare voluntar
              contează
            </p>
            <p>
              Înscrie-te la adresa <b>contact.asociatiasmart@gmail.com </b>
              și fii parte din schimbarea pe care o dorești să o vezi în lume!
            </p>
          </div>
          <img src="/BecomeVolLogos/SideLogo.png" alt="" />
        </section>
      </div>
    </section>
  );
}
