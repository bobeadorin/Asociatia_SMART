import "./AboutUsStyles.css";
import ImgSection from "../../../UtilityComponents/ImageSections/ImgSection.jsx";
import TextCard from "../aboutUsComponents/textCard/TextCard";
import { firstCard, secondCard, thirdCard } from "./aboutUsTextContent.js";
export default function AboutUs() {
  return (
    <section>
      <ImgSection url="/AboutUsPageLogos/aboutUsTopPhoto.png" />
      <section className="aboutUs-card-container">
        <TextCard
          styles={{
            position: "absolute",
            left: "10%",
            zIndex: "-1",
            backgroundColor: "#38b6ff",
          }}
          text={firstCard}
        />
        <TextCard
          styles={{
            position: "absolute",
            top: "30%",
            right: "7%",
            zIndex: "1",
            backgroundColor: "#a9acfa",
          }}
          text={secondCard}
        />
        <TextCard
          styles={{
            position: "absolute",
            top: "60%",
            left: "10%",
            zIndex: "2",
            backgroundColor: "#5a92ff",
          }}
          text={thirdCard}
        />
      </section>
      <div className="values-aboutUs-section">
        <div className="values-aboutUs-header-container">
          <h2>VALORI</h2>
          <hr />
        </div>
        <div className="values-aboutUs-p-container">
          <p>
            <b>Egalitate: </b>
            Egalitatea de șanse pentru fiecare copil și tânăr, indiferent de
            contextul socio-economic sau geografic.
          </p>
          <p>
            <b>Incluziune: </b>
            Crearea unei societăți incluzive, unde fiecare copil și tânăr este
            valorificat și respectat.
          </p>
          <p>
            <b>Sustenabilitate: </b>
            Abordarea unor soluții sustenabile care să sprijine comunitățile
            rurale în dezvoltarea lor durabilă. Protejarea naturii: Conservarea
            resurselor naturale și proitejarea mediului înconjurător.
          </p>
          <p>
            <b>Învățare continuă: </b>
            Cultivarea unui mediu de învățare continuă.
          </p>
          <p>
            <b>Colaborare: </b>
            Colaborarea prin parteneriate solide cu comunitățile, autoritățile
            locale, organizații non-guvernamentale și alte entități.
          </p>
          <p>
            <b>Transparență: </b>
            Angajarea unei comunitări deschise și transparente în toate
            acțiunile desfășurate.
          </p>
        </div>
      </div>
      <ImgSection url="/AboutUsPageLogos/aboutUsBottomPhoto.png" />
    </section>
  );
}
