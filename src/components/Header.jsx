import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing icons for hamburger menu

export default function Header({ onActiveComponentChange }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-blue-900 text-white py-6 shadow-md">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold mb-2">Andrian Nikolaev</h1>
        <p className="text-lg font-light text-yellow-400 italic mb-4">
          Software Portfolio Website
        </p>

        {/* Navigation */}
        <nav className="relative">
          {/* For large screens - horizontal layout */}
          <div className="hidden lg:flex justify-center space-x-6">
            <button
              className="bg-blue-700 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 hover:shadow-xl transition-all duration-300"
              onClick={() => onActiveComponentChange("about-me")}
            >
              About Me
            </button>
            <button
              className="bg-blue-700 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 hover:shadow-xl transition-all duration-300"
              onClick={() => onActiveComponentChange("skills")}
            >
              Skills
            </button>
            <button
              className="bg-blue-700 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 hover:shadow-xl transition-all duration-300"
              onClick={() => onActiveComponentChange("experience")}
            >
              Experience
            </button>
            <button
              className="bg-blue-700 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 hover:shadow-xl transition-all duration-300"
              onClick={() => onActiveComponentChange("projects")}
            >
              Projects
            </button>
          </div>

          {/* For small screens - hamburger menu */}
          <div className="lg:hidden flex justify-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="bg-blue-700 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 hover:shadow-xl transition-all duration-300"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}{" "}
              {/* Toggle between hamburger and close icon */}
            </button>
          </div>

          {/* Dropdown menu for small screens */}
          {menuOpen && (
            <div className="flex flex-col space-y-4 mt-4 lg:hidden justify-center items-center">
              <button
                className="bg-blue-700 text-white py-2 px-4 w-full rounded-lg shadow-lg hover:bg-blue-600 hover:shadow-xl transition-all duration-300"
                onClick={() => {
                  onActiveComponentChange("about-me");
                  setMenuOpen(false);
                }}
              >
                About Me
              </button>
              <button
                className="bg-blue-700 text-white py-2 px-4 w-full rounded-lg shadow-lg hover:bg-blue-600 hover:shadow-xl transition-all duration-300"
                onClick={() => {
                  onActiveComponentChange("skills");
                  setMenuOpen(false);
                }}
              >
                Skills
              </button>
              <button
                className="bg-blue-700 text-white py-2 px-4 w-full rounded-lg shadow-lg hover:bg-blue-600 hover:shadow-xl transition-all duration-300"
                onClick={() => {
                  onActiveComponentChange("experience");
                  setMenuOpen(false);
                }}
              >
                Experience
              </button>
              <button
                className="bg-blue-700 text-white py-2 px-4 w-full rounded-lg shadow-lg hover:bg-blue-600 hover:shadow-xl transition-all duration-300"
                onClick={() => {
                  onActiveComponentChange("projects");
                  setMenuOpen(false);
                }}
              >
                Projects
              </button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
