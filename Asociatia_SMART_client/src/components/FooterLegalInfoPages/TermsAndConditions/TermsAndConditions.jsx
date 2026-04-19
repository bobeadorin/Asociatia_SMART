import "./TermsAndConditionsStyles.css";
import { useLanguage } from "../../../hooks/useLanguage";

export default function TermsAndConditions() {
  const { strings } = useLanguage();
  const { welcome, introText, sections, agreementStatement } = strings.termsAndConditionsText;
  const {
    siteUsage,
    personalInformation,
    contentOwnership,
    liability,
    modifications,
    contact,
  } = sections;

  return (
    <article className="termsAndConditions-container">
      <section className="terms-content-wrapper">
        <h1 className="terms-section-title">{welcome}</h1>
        <p className="terms-starting-p">{introText}</p>

        <h2 className="terms-titles">{siteUsage.title}</h2>
        <p>
          <strong className="terms-subTitles">{siteUsage.accessAndUsage.subtitle}</strong>
        </p>
        <ul className="terms-text-wrapper">
          {siteUsage.accessAndUsage.points.map((point) => (
            <li key={point} className="terms-normalText">
              {point}
            </li>
          ))}
        </ul>
        <p>
          <strong className="terms-subTitles">{siteUsage.misuse.subtitle}</strong>
        </p>
        <ul className="terms-text-wrapper">
          {siteUsage.misuse.points.map((point) => (
            <li key={point} className="terms-normalText">
              {point}
            </li>
          ))}
        </ul>

        <h2 className="terms-titles">{personalInformation.title}</h2>
        <p>
          <strong className="terms-subTitles">{personalInformation.confidentiality.subtitle}</strong>
        </p>
        <ul className="terms-text-wrapper">
          {personalInformation.confidentiality.points.map((point) => (
            <li key={point} className="terms-normalText">
              {point}
            </li>
          ))}
        </ul>
        <p>
          <strong className="terms-subTitles">{personalInformation.informationAccuracy.subtitle}</strong>
        </p>
        <ul className="terms-text-wrapper">
          {personalInformation.informationAccuracy.points.map((point) => (
            <li key={point} className="terms-normalText">
              {point}
            </li>
          ))}
        </ul>

        <h2 className="terms-titles">{contentOwnership.title}</h2>
        <p>
          <strong className="terms-subTitles">{contentOwnership.intellectualRights.subtitle}</strong>
        </p>
        <ul className="terms-text-wrapper">
          {contentOwnership.intellectualRights.points.map((point) => (
            <li key={point} className="terms-normalText">
              {point}
            </li>
          ))}
        </ul>
        <p>
          <strong className="terms-subTitles">{contentOwnership.contentUsage.subtitle}</strong>
        </p>
        <ul className="terms-text-wrapper">
          {contentOwnership.contentUsage.points.map((point) => (
            <li key={point} className="terms-normalText">
              {point}
            </li>
          ))}
        </ul>

        <h2 className="terms-titles">{liability.title}</h2>
        <p>
          <strong className="terms-subTitles">{liability.disclaimer.subtitle}</strong>
        </p>
        <ul className="terms-text-wrapper">
          {liability.disclaimer.points.map((point) => (
            <li key={point} className="terms-normalText">
              {point}
            </li>
          ))}
        </ul>

        <h2 className="terms-titles">{modifications.title}</h2>
        <p>
          <strong className="terms-subTitles">{modifications.updates.subtitle}</strong>
        </p>
        <ul className="terms-text-wrapper">
          {modifications.updates.points.map((point) => (
            <li key={point} className="terms-normalText">
              {point}
            </li>
          ))}
        </ul>

        <h2 className="terms-titles">{contact.title}</h2>
        <p>
          <strong className="terms-subTitles">{contact.questions.subtitle}</strong>
        </p>
        <ul className="terms-text-wrapper">
          {contact.questions.points.map((point) => (
            <li key={point} className="terms-normalText">
              {point}
            </li>
          ))}
        </ul>

        <p>{agreementStatement}</p>
      </section>
    </article>
  );
}
