import "./DonateStyles.css";
import ImgSection from "../../../UtilityComponents/ImageSections/ImgSection";
import TaxRedirectInfoPannel from "../donateComponents/TaxRedirectInfoPannel";
import { useLanguage } from "../../../../hooks/useLanguage";

export default function Donate() {
  const { strings } = useLanguage();
  const { header, introDescription, donationMethods, whyDonate } = strings.donateText;

  return (
    <article>
      <ImgSection url="/DonatePageLogos/DonateMainLogo.png" />
      <div className="dontate-firstSection">
        <h1>{header}</h1>
        <p>{introDescription}</p>
      </div>
      <section className="donate-secondSection">
        <div>
          <img src="/DonatePageLogos/DonateBalanceLogo.png" alt="" />
          <p>{donationMethods.legalEntity.description}</p>
        </div>
        <div>
          <img src="/DonatePageLogos/DonatePaperPlaneLogo.png" alt="" />
          <p>
            {donationMethods.bankTransfer.description} <b>{donationMethods.bankTransfer.iban}</b>
          </p>
        </div>
      </section>
      <section className="whyDonate-section">
        <div className="whyDonate-header-wrapper">
          <hr />
          <h2>{whyDonate.sectionTitle}</h2>
          <hr />
        </div>
        <div>
          <p>
            <b>{whyDonate.educationIsKey.label}</b> {whyDonate.educationIsKey.description}
          </p>
          <p>
            <b>{whyDonate.povertyReduction.label}</b> {whyDonate.povertyReduction.description}
          </p>
          <p>
            <b>{whyDonate.tangibleImpact.label}</b> {whyDonate.tangibleImpact.description}
          </p>
          <p>
            <b>{whyDonate.solidarityAndCommunity.label}</b> {whyDonate.solidarityAndCommunity.description}
          </p>
          <p>
            <b>{whyDonate.investmentInFuture.label}</b> {whyDonate.investmentInFuture.description}
          </p>
        </div>
      </section>
      <TaxRedirectInfoPannel />
    </article>
  );
}
