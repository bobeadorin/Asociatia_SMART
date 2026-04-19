/* eslint-disable react/prop-types */
import "./ProjectItemStyles.css";

export default function ProjectItem({ projectTitlePrefix = "", projectName, projectDescription, imagePath }) {
  return (
    <section className="projectItem-section">
      <div className="projectItem-container">
        <div className="projectItem-titleSection">
          <h2 className="projectItem-Title">{projectTitlePrefix}{projectName}</h2>
          <hr />
        </div>
        <div className="projectItem-Description">{projectDescription}</div>
      </div>
      <img className="projectItem-image" src={imagePath} alt="" />
    </section>
  );
}
