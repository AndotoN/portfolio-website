// FewProjectsGrid.jsx
import { PROJECTS_DATA } from "./projects";

export default function FewProjectsGrid({ handleOpeningProjectOverview }) {
  // Get only the first 3 projects
  const fewProjects = PROJECTS_DATA.slice(0, 3);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-[40rem] ">
      {fewProjects.map((project, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow"
        >
          {/* Project Title */}
          <h2 className="text-2xl font-semibold text-center text-blue-900 mb-4">
            {project.title}
          </h2>

          {/* Project Image */}
          <img
            src={project.img[0]}
            alt={`${project.title} screenshot`}
            className="w-full h-48 object-cover rounded-md mb-4"
          />

          {/* View More Button */}
          <div className="text-center">
            <button
              onClick={() => handleOpeningProjectOverview(project)}
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
            >
              View More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
