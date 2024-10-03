// App.jsx
import AboutMe from "./components/AboutMe/AboutMe";
import Header from "./components/Header";
import { useState } from "react";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";

function App() {
  const [activeComponent, setActiveComponent] = useState("about-me");

  function handleActiveComponentChange(component) {
    setActiveComponent(component);
  }

  let content;
  switch (activeComponent) {
    case "about-me":
      content = <AboutMe />;
      break;
    case "skills":
      content = <Skills />;
      break;
    case "experience":
      content = <Experience />;
      break;
    case "projects":
      content = <Projects />;
      break;
    default:
      content = <AboutMe />;
      break;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        activeComponent={activeComponent}
        onActiveComponentChange={handleActiveComponentChange}
      ></Header>
      {content}
    </div>
  );
}

export default App;
