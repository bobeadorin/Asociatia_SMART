import "./ProjectsStyles.css";
import ProjectItem from "../projectsComponents/ProjectItem";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../../../hooks/useLanguage";

export default function Projects() {
  const navigate = useNavigate();
  const { strings } = useLanguage();
  const project = strings.projectsText.beezSmart;

  return (
    <section>
      <div className="projects-logo-container">
        <img className="projects-img" src="/ProjectsPageLogos/ProjectsMainLogo.png" alt="" />
      </div>
      <div className="projects-container" onClick={() => navigate("/Proiecte/BeezSMART")}>
        <ProjectItem
          projectTitlePrefix={strings.projectsText.projectItemTitlePrefix}
          projectName={project.name}
          projectDescription={project.shortDescription}
          imagePath={project.imagePath}
        />
      </div>
    </section>
  );
}
