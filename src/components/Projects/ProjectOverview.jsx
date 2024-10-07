// ProjectOverview.jsx
import FewProjectsGrid from "./FewProjectsGrid";
import { useState } from "react";

export default function ProjectOverview({
  project,
  handleOpeningProjectOverview,
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.img.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === project.img.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full lg:w-2/3 mx-auto space-y-8">
      {/* Project Details Section */}
      <div className="bg-white p-8 rounded-lg shadow-lg">
        {/* Project Title */}
        <h1 className="text-3xl font-bold text-blue-900 mb-6 text-center">
          {project.title}
        </h1>

        {/* Image Slider */}
        <div className="relative w-full">
          <img
            src={project.img[currentImageIndex]}
            alt={`Screenshot ${currentImageIndex + 1}`}
            className="w-full h-auto object-cover rounded-md"
          />

          {/* Navigation Controls */}
          <button
            onClick={handlePrevImage}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600"
          >
            &lt;
          </button>
          <button
            onClick={handleNextImage}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600"
          >
            &gt;
          </button>
        </div>

        {/* Image Count Indicator */}
        <p className="text-gray-600 mt-4 text-center">
          Image {currentImageIndex + 1} of {project.img.length}
        </p>

        {/* Project Technology Stack */}
        <div className="mt-6">
          <h3 className="text-blue-900 font-bold mb-2 text-center">
            Tech Stack:
          </h3>
          <ul className="flex justify-center space-x-2">
            {project.technologyStack.map((tech, index) => (
              <li
                key={index}
                className="bg-blue-100 text-blue-900 px-3 py-1 rounded-lg text-sm"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        {/* Short Description */}
        <p className="text-gray-700 mt-6 text-center">
          {project.shortDescription}
        </p>
      </div>

      {/* Separator: Showing app's background between sections */}
      <div className="w-full "></div>

      {/* Few Projects Grid Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <FewProjectsGrid
          handleOpeningProjectOverview={handleOpeningProjectOverview}
        />
      </div>
    </div>
  );
}
