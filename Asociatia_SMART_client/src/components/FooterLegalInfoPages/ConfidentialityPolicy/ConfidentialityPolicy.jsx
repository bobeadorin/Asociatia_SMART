import "../TermsAndConditions/TermsAndConditionsStyles.css";
import { useLanguage } from "../../../hooks/useLanguage";

export default function ConfidentialityPolicy() {
  const { strings } = useLanguage();
  const { welcome, introText, sections, agreementStatement } = strings.confidentialityPolicyText;
  const {
    collectedInformation,
    collectionPurpose,
    dataRetention,
    informationSharing,
    userRights,
    cookies,
    policyModifications,
    contact,
  } = sections;

  return (
    <article className="termsAndConditions-container">
      <section className="terms-content-wrapper">
        <h1 className="terms-section-title">{welcome}</h1>
        <p className="terms-starting-p">{introText}</p>

        <h2 className="terms-titles">{collectedInformation.title}</h2>
        <p className="terms-subTitles">
          <strong>{collectedInformation.personalInformation.subtitle}</strong>
        </p>
        <ul className="terms-text-wrapper">
          {collectedInformation.personalInformation.items.map((item) => (
            <li key={item} className="terms-normalText">
              {item}
            </li>
          ))}
        </ul>
        <p className="terms-subTitles">
          <strong>{collectedInformation.usageInformation.subtitle}</strong>
        </p>
        <ul className="terms-text-wrapper">
          {collectedInformation.usageInformation.items.map((item) => (
            <li key={item} className="terms-normalText">
              {item}
            </li>
          ))}
        </ul>

        <h2 className="terms-titles">{collectionPurpose.title}</h2>
        <p className="terms-text-wrapper">{collectionPurpose.description}</p>
        <ul className="terms-text-wrapper">
          {collectionPurpose.purposes.map((purpose) => (
            <li key={purpose} className="terms-normalText">
              {purpose}
            </li>
          ))}
        </ul>

        <h2 className="terms-titles">{dataRetention.title}</h2>
        <p className="terms-text-wrapper">{dataRetention.description}</p>

        <h2 className="terms-titles">{informationSharing.title}</h2>
        <p className="terms-text-wrapper">{informationSharing.description}</p>

        <h2 className="terms-titles">{userRights.title}</h2>
        <p className="terms-text-wrapper">{userRights.description}</p>

        <h2 className="terms-titles">{cookies.title}</h2>
        <p className="terms-text-wrapper">{cookies.description}</p>

        <h2 className="terms-titles">{policyModifications.title}</h2>
        <p className="terms-text-wrapper">{policyModifications.description}</p>

        <h2 className="terms-titles">{contact.title}</h2>
        <p className="terms-text-wrapper">{contact.description}</p>

        <p className="terms-text-wrapper">{agreementStatement}</p>
      </section>
    </article>
  );
}
