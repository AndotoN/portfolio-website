// AllProjectsGrid.jsx
import { PROJECTS_DATA } from "./projects";
import Project from "./Project";

export default function AllProjectsGrid({ handleOpeningProjectOverview }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
      {PROJECTS_DATA.map((project, index) => (
        <div key={index} className="cursor-pointer">
          <Project
            title={project.title}
            technologyStack={project.technologyStack}
            shortDescription={project.shortDescription}
            image={project.img}
            onClick={() => handleOpeningProjectOverview(project)} // Pass the correct handler
          />
        </div>
      ))}
    </div>
  );
}
