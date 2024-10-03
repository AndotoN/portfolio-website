import Characteristics from "./Characteristics";
import Skill from "./Skill";
import SoftwareStack from "./SoftwareStack";

const skillsData = [
  {
    name: "Java",
    level: 8,
    details: ["Java 11+", "MVC", "Maven"],
    description:
      "I first gained a solid foundation in Java through university courses, which provided me with a strong grasp of the fundamentals, including object-oriented programming and core Java concepts. However, it was during my work as a DevOps engineer that I truly advanced my skills. Working with complex systems, I developed an in-depth understanding of Java's role in enterprise applications, focusing on scalable architectures, performance optimization, and debugging.",
  },
  {
    name: "CI/CD",
    level: 8,
    details: ["GitLab", "GitHub"],
    description:
      "At work, I've gained extensive experience with CI/CD pipelines, focusing on continuous development practices. I’ve used Git for version control to manage project changes efficiently and ensure smooth integration and deployment processes. This has helped streamline development workflows, enhance collaboration, and maintain code quality across projects.",
  },
  {
    name: "Python",
    level: 6,
    details: ["Data Analysis", "Pandas"],
    description:
      "I gained significant experience with Python during my Bachelor's degree, where I developed a project of over 1,000 lines of code using real-world data from Vestas. My code processed and analyzed large datasets from various locations using a supercomputer. The project involved complex data analysis with Python, particularly focusing on libraries like Pandas, and required high performance and efficiency in handling data",
  },
  {
    name: "Cloud Computing (Linux)",
    level: 5,
    details: ["OPS", "Nexus Kazan", "TWS"],
    description:
      "I can I utilize cloud-based tools like OPS and Nexus Kazan to deploy software at scale. My experience involves managing distributed environments, ensuring efficient resource allocation, and optimizing deployments for high availability and scalability. ",
  },
  {
    name: "JavaScript",
    level: 4,
    details: ["React.js", "Node.js"],
    description:
      "Used in various web development projects for frontend and backend.",
  },
];

export default function Skills() {
  return (
    <div className="bg-white py-12 px-8 lg:px-28 shadow-lg rounded-lg mb-10">
      {/* Skills Header */}
      <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-8 text-center">
        Skills
      </h2>

      {/* Container for both Characteristics and SoftwareStack */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-16">
          {/* Each component takes up 50% of the width with equal spacing */}
          <div className="flex-1 flex justify-center">
            <Characteristics />
          </div>
          <div className="flex-1 flex justify-center">
            <SoftwareStack skills={skillsData} />
          </div>
        </div>
      </div>

      {/* New Section for Individual Skill Components */}
      <div className="mt-10 space-y-6">
        {skillsData.map((skill, index) => (
          <Skill
            key={index}
            name={skill.name}
            description={skill.description}
          />
        ))}
      </div>
    </div>
  );
}
