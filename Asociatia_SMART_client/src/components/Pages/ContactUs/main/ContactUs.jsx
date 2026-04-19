import "./ContactUsStyles.css";
import FormComponent from "../contactUsComponets/FormComponent";
import ImgSection from "../../../UtilityComponents/ImageSections/ImgSection";
import { useLanguage } from "../../../../hooks/useLanguage";

export default function ContactUs() {
  const { strings } = useLanguage();
  const { title, labels } = strings.contactUsText.formSection;
  const contactInfo = strings.contactUsText.contactInfo;

  return (
    <section>
      <ImgSection url="/ContactUsPageLogos/ContactUsMainLogo.png" />
      <div className="contactUs-content-container">
        <div className="form-wrapper">
          <h2>{title}</h2>
          <FormComponent />
        </div>
        <div className="contact-info-wrapper">
          <h2>{contactInfo.title}</h2>
          <p>email: {contactInfo.email}</p>
          <p>telefon: {contactInfo.phone}</p>
        </div>
      </div>
    </section>
  );
}
