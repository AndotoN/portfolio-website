import { useState } from "react";

export default function Header({ onActiveComponentChange }) {
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

          {/* For small and medium screens - vertical layout */}
          <div className="flex flex-col lg:hidden space-y-4">
            <button
              className="bg-blue-700 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 hover:shadow-xl transition-all duration-300 w-full"
              onClick={() => onActiveComponentChange("about-me")}
            >
              About Me
            </button>
            <button
              className="bg-blue-700 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 hover:shadow-xl transition-all duration-300 w-full"
              onClick={() => onActiveComponentChange("skills")}
            >
              Skills
            </button>
            <button
              className="bg-blue-700 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 hover:shadow-xl transition-all duration-300 w-full"
              onClick={() => onActiveComponentChange("experience")}
            >
              Experience
            </button>
            <button
              className="bg-blue-700 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 hover:shadow-xl transition-all duration-300 w-full"
              onClick={() => onActiveComponentChange("projects")}
            >
              Projects
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
