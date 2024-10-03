import meImg from "../../assets/me.jfif";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setIsVisible(true);
  }, []);

  return (
    <div className="relative bg-blue-900 text-white py-20 px-8 lg:px-28 overflow-hidden">
      {/* Background overlay for subtle contrast */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative z-10 flex flex-col lg:flex-row justify-center items-center gap-10 max-w-7xl mx-auto">
        {/* Image section with animation */}
        <div
          className={`w-2/3 lg:w-1/3 mb-8 lg:mb-0 transform transition-all duration-1000 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          <img
            src={meImg}
            className="w-full rounded-full border-4 border-white shadow-xl"
            alt="Andrian Nikolaev"
          />
          <div className="text-center mt-6">
            <a
              href="#projects"
              className="inline-block bg-yellow-400 text-black py-3 px-6 rounded-lg font-semibold hover:bg-yellow-500 transition-colors duration-300 animate-pulse"
            >
              Explore My Work
            </a>
          </div>
        </div>

        {/* Text section with animation */}
        <div
          className={`w-full lg:w-2/3 text-center lg:text-left transform transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Hi, I'm <span className="text-yellow-400">Andrian Nikolaev</span>
          </h1>
          <p className="text-lg mb-6">
            As a DevOps engineer, I work mainly with{" "}
            <span className="text-yellow-400 font-semibold">
              Java, Python, CI/CD pipelines
            </span>
            , automating workflows, optimizing cloud infrastructure, and
            ensuring system scalability and reliability.
          </p>
          <p className="text-lg mb-6">
            Meanwhile, I have a passion for learning{" "}
            <span className="text-yellow-400 font-semibold">
              JavaScript, React, and Node.js
            </span>
            .
          </p>
          <p className="text-lg mb-6">
            Based in Sofia, Bulgaria, after spending five years in Denmark,
            gaining valuable experience collaborating with people from diverse
            backgrounds.
          </p>
          {/* Social Links */}
          <div className="flex justify-center lg:justify-start gap-6 mt-4">
            <a
              href="https://www.linkedin.com/in/andrian-nikolaev-249889164/"
              className="text-white hover:text-yellow-400 transition-colors duration-300 text-2xl"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/AndotoN"
              className="text-white hover:text-yellow-400 transition-colors duration-300 text-2xl"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
