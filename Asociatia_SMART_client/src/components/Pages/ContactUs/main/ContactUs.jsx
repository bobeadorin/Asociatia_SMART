import "./ContactUsStyles.css";
import FormComponent from "../contactUsComponets/FormComponent";
import ImgSection from "../../../UtilityComponents/ImageSections/ImgSection";
export default function ContactUs() {
  return (
    <section>
      <ImgSection url="/ContactUsPageLogos/ContactUsMainLogo.png" />
      <div className="contactUs-content-container">
        <div className="form-wrapper">
          <h2>Scrie-ne aici:</h2>
          <FormComponent />
        </div>
        <div className="contact-info-wrapper">
          <h2>Contact:</h2>
          <p>email: contact.asociatiasmart@gmail.com</p>
          <p>telefon: +40 774 683 032</p>
        </div>
      </div>
    </section>
  );
}
