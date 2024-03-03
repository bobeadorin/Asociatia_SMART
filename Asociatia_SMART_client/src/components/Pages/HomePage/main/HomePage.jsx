import PhotoCarousel from "../homeComponents/PhotoCarousel/PhotoCarousel";
import ReasonSectionHome from "../homeComponents/homePageOurReasonSection/ReasonSectionHome";
import ImgSection from "../homeComponents/ImageSections/ImgSection";
import HomePageLogo from "/HomePageLogos/HomePageLogo.png";
export default function HomePage() {
  return (
    <div>
      <PhotoCarousel />
      <ReasonSectionHome />
      <ImgSection url={HomePageLogo} />
      <section>
        <div>
          <img src="" alt="" />
          <p>
            <h3>DONEAZA</h3>
            Construim un viitor mai luminos! Fiecare donație contează și este un
            pas către schimbarea pozitivă în viețile copiilor și tinerilor din
            comunitățile rurale.
          </p>
        </div>
        <div>
          <img src="" alt="" />
          <p>
            <h3>IMPLICĂ-TE</h3>
            Alătură-te misiunii noastre de transformare! Suntem în căutarea de
            inimi generoase și entuziasmate care vor să facă parte din
            schimbarea pozitivă în comunitățile rurale. Dacă ești pasionat de
            educația non-formală și vrei să contribui la reducerea sărăciei, te
            invităm să devii voluntar alături de noi.
          </p>
        </div>
      </section>
    </div>
  );
}
