// Projects.jsx
import randomImg from "../../assets/bulgaria-map.png";
import CodeRepository from "./CodeRepository";
import Project from "./Project";

const projectsData = [
  {
    title: "This Portfolio Website",
    img: randomImg,
    shortDescription:
      "Built with React.js, TailwindCSS, and Vite. A personal portfolio showcasing projects and skills.",
    technologyStack: ["JavaScript", "React.js", "Node.js"],
  },
  {
    title: "Tic Tac Toe",
    img: randomImg,
    shortDescription:
      "A simple Tic-Tac-Toe game built using React.js with state management and grid logic.",
    technologyStack: ["JavaScript", "React.js", "CSS"],
  },
  {
    title: "Web shop",
    img: randomImg,
    shortDescription:
      "An e-commerce shop where users can browse items and manage their shopping cart.",
    technologyStack: ["JavaScript", "React.js", "Node.js"],
  },
  {
    title: "Destination list",
    img: randomImg,
    shortDescription:
      "A destination picker app that allows users to select travel locations from a list.",
    technologyStack: ["JavaScript", "React.js", "Node.js"],
  },
  {
    title: "Bachelor Thesis with Vestas",
    img: randomImg,
    shortDescription:
      "Data analysis project with real-time processing of large datasets using Python and supercomputers.",
    technologyStack: ["Python", "pandas", "Data Analysis"],
  },
];

export default function Projects() {
  return (
    <section className="py-12 px-8 lg:px-28">
      <div className="flex flex-col items-center">
        {/* Button to open my GitHub account */}
        <CodeRepository />
        {/* Button to reset the view */}
        <button className="bg-blue-500 text-white text-lg font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out mb-8">
          See all projects
        </button>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {projectsData.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              technologyStack={project.technologyStack}
              shortDescription={project.shortDescription}
              image={project.img}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
