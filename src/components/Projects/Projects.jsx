// Projects.jsx
import CodeRepository from "./CodeRepository";
import { useState } from "react";
import ProjectOverview from "./ProjectOverview";
import AllProjectsGrid from "./AllProjectsGrid";

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null); // Initial state is null

  // Function to set the selected project
  function handleOpeningProjectOverview(project) {
    setActiveProject(project);
  }

  // Reset to no active project (hide ProjectOverview)
  function handleResetProjects() {
    setActiveProject(null);
  }

  return (
    <section className="py-12 px-8 lg:px-28">
      <div className="flex flex-col items-center">
        {/* Conditionally render the correct button */}
        {activeProject ? (
          // Display "See all projects" button when a project is selected
          <button
            className="bg-blue-500 text-white text-lg font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out mb-8"
            onClick={handleResetProjects}
          >
            See all projects
          </button>
        ) : (
          // Display GitHub button when no project is selected
          <CodeRepository />
        )}

        {/* Conditionally render the ProjectOverview only when a project is selected */}
        {activeProject ? (
          <ProjectOverview
            project={activeProject}
            handleOpeningProjectOverview={handleOpeningProjectOverview}
          />
        ) : (
          <AllProjectsGrid
            handleOpeningProjectOverview={handleOpeningProjectOverview}
          />
        )}
      </div>
    </section>
  );
}
