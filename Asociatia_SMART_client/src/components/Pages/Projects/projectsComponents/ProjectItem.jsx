import "./ProjectItemStyles.css";

export default function ProjectItem(projectData) {
  console.log(projectData);
  return (
    <section className="projectItem-section">
      <div className="projectItem-container">
        <div className="projectItem-titleSection">
          <h2 className="projectItem-Title">Proiectul {projectData.projectName}</h2>
          <hr />
        </div>
        <div className="projectItem-Description">{projectData.projectDescription}</div>
      </div>
      <img className="projectItem-image" src={projectData.imagePath} alt="" />
    </section>
  );
}
