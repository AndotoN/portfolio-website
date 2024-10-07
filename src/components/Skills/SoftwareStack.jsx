import { useState, useEffect } from "react";

export default function SoftwareStack({ skills }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      {/* Software Stack Heading - Centered */}
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 mb-8 text-center">
        Software Stack
      </h2>

      {/* Skills List - Each skill is presented with a progress bar and details */}
      <div className="space-y-6 w-full">
        {skills.map((skill, index) => (
          <SkillItem
            key={index}
            name={skill.name}
            level={skill.level}
            details={skill.details}
          />
        ))}
      </div>
    </div>
  );
}

function SkillItem({ name, level, details }) {
  const [progress, setProgress] = useState(0);

  // Trigger the animation when the component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(level * 10); // Set the progress to the appropriate level percentage (0 to 100)
    }, 100); // Delay the animation slightly
    return () => clearTimeout(timer); // Clean up the timer
  }, [level]);

  return (
    <div className="mb-6">
      {/* Skill Name, Progress Bar, and Details displayed in a single row */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="flex flex-col md:flex-row items-start md:items-center">
          {/* Skill Name and Progress Bar */}
          <div className="w-full md:w-auto">
            <h3 className="font-semibold text-lg md:text-xl text-blue-900 mb-2">
              {name}
            </h3>
            <div className="bg-gray-200 rounded-full h-3 w-full md:w-64 mt-2 overflow-hidden">
              <div
                className="bg-blue-500 h-3 rounded-full transition-all duration-1000 ease-in-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Skill Details */}
          <div className="flex items-start md:items-center ml-0 md:ml-6 mt-4 md:mt-0">
            <ul className="flex flex-wrap space-x-2 text-gray-700">
              {details.map((detail, index) => (
                <li className="italic" key={index}>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
