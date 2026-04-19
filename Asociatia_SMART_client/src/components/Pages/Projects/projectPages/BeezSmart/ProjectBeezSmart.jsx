/* eslint-disable react/no-unescaped-entities */
import "./ProjectBeezSmartStyles.css";
import { useLanguage } from "../../../../../hooks/useLanguage";

export default function ProjectBeezSmart() {
  const { strings } = useLanguage();
  const {
    pageTitle,
    location,
    year,
    headerDescription,
    sectionOneTitle,
    sectionOneDescription,
    beehiveText,
    beezMeaning,
    activitiesTitle,
    activityItems,
    impactTitle,
    impactItems,
    testimonialsTitle,
    testimonials,
    bottomSection,
  } = strings.projectsText.beezSmartPage;

  return (
    <section>
      {/* Project Logo */}
      <div className="projects-logo-container">
        <img loading="lazy" className="projects-img" src="/ProjectsPageLogos/ProjectsMainLogo.png" alt="Projects Main Logo" />
      </div>

      {/* Header Section */}
      <div className="beezSmart-header-section">
        <div className="beez-titleSection">
          <h1>{pageTitle}</h1>
          <p className="beez-titleSection-Location">{location}</p>
          <p className="beez-titleSection-Year">{year}</p>
          <img className="beezSmartMainLogo" src="/BeezSmartProjectPhotos/beeMainLogo.png" alt="" />
        </div>
        <p className="beezSmart-header-section-description">{headerDescription}</p>
      </div>

      {/* Section One */}
      <div className="beezSmart-section-one">
        <img src="/BeezSmartProjectPhotos/beezSmart_section2_photo1.jpg" loading="lazy" alt="left" />
        <div className="beezSmart-section-one-text-wrapper">
          <p>{sectionOneTitle}</p>
          <p>{sectionOneDescription}</p>
        </div>
        <img loading="lazy" src="/BeezSmartProjectPhotos/beezSmart_section2_photo2.jpg" alt="" />
      </div>

      {/* Beehive Section */}
      <div className="beezSmart-section-two">
        <div className="beeLogos-and-text-container">
          <p>{beehiveText}</p>
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
          <p>{beezMeaning}</p>
          <img className="beeImage-left" src="/BeezSmartProjectPhotos/bee_left.png" alt="bee left" />
        </div>
      </div>

      {/* Activities & Impact */}
      <div className="beezSmart-section-two-and-a-half">
        <div className="beezSmart-column">
          <h1 className="beezSmart-title">{activitiesTitle}</h1>
          <ul className="beezSmart-list">
            {activityItems.map((item) => (
              <li key={item} className="beezSmart-list-item">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="beezSmart-column">
          <h1 className="beezSmart-title">{impactTitle}</h1>
          <ul className="beezSmart-list">
            {impactItems.map((item) => (
              <li key={item} className="beezSmart-list-item">
                {item}
              </li>
            ))}
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
        <h2>{testimonialsTitle}</h2>
        <div className="beezSmart-testimonials-container">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial">
              <p>{testimonial}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="beezSmart-bottom-section">
        <p>{bottomSection.fundedBy}</p>
        <img className="europoLogo" src="/BeezSmartProjectPhotos/europaLogo.png" alt="" />
        <div>
          <p>{bottomSection.moreInfoText}</p>
          <p className="link-pdf">
            <a className="link-pdf" href="/BeezSmartProjectPhotos/raport_SMART.pdf" target="_blank" rel="noopener noreferrer">
              {bottomSection.pdfLinkText}
            </a>
          </p>
        </div>

        <div>
          <p>{bottomSection.pressTitle}</p>
          {bottomSection.pressLinks.map((link) => (
            <p key={link.url}>
              {link.label} -{' '}
              <a className="press-links" href={link.url} target="_blank" rel="noopener noreferrer">
                {link.url}
              </a>
            </p>
          ))}
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
