import "./ProjectsStyles.css";
import ProjectItem from "../projectsComponents/ProjectItem";
import { projectItems } from "../../../../constants/constants";
import { useNavigate } from "react-router-dom";

export default function Projects() {
  const navigate = useNavigate();
  return (
    <section>
      <div className="projects-logo-container">
        <img className="projects-img" src="/ProjectsPageLogos/ProjectsMainLogo.png" alt="" />
      </div>
      <div className="projects-container" onClick={() => navigate("/Proiecte/BeezSMART")}>
        <ProjectItem
          projectName={projectItems.beezSmart.name}
          projectDescription={projectItems.beezSmart.description}
          imagePath={projectItems.beezSmart.imagePath}
        />
      </div>
    </section>
  );
}
