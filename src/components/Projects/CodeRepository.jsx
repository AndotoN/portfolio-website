// CodeRepository.jsx
import { FaGithub } from "react-icons/fa"; // Importing the GitHub icon

export default function CodeRepository() {
  return (
    <div className="flex items-center justify-center  pb-8">
      {/* GitHub Icon */}
      <a
        href="https://github.com/AndotoN"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out flex items-center gap-4"
      >
        {/* Icon */}
        <FaGithub className="text-3xl" />
        {/* Text */}
        Find all projects on my GitHub account
      </a>
    </div>
  );
}
