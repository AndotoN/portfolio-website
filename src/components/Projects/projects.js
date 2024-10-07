// projects.js
import destinationImg1 from "../../assets/projects/destination-list-1.png";
import destinationImg2 from "../../assets/projects/destination-list-2.png";
import destinationImg3 from "../../assets/projects/destination-list-3.png";
import portolioImg1 from "../../assets/projects/portfolio-website-1.png";
import portolioImg2 from "../../assets/projects/portfolio-website-2.png";
import portolioImg3 from "../../assets/projects/portfolio-website-3.png";
import tictactoeImg1 from "../../assets/projects/tic-tac-toe-1.png";
import tictactoeImg2 from "../../assets/projects/tic-tac-toe-2.png";
import tictactoeImg3 from "../../assets/projects/tic-tac-toe-3.png";
import webshopImg1 from "../../assets/projects/web-shop-1.png";
import webshopImg2 from "../../assets/projects/web-shop-2.png";
import webshopImg3 from "../../assets/projects/web-shop-3.png";
import bachelorImg1 from "../../assets/projects/bachelor-project-1.png";
import bachelorImg2 from "../../assets/projects/bachelor-project-2.png";

export const PROJECTS_DATA = [
    {
      title: "Portfolio",
      img: [portolioImg1, portolioImg2, portolioImg3],
      shortDescription:
        "Built with React.js, TailwindCSS, and Vite. A personal portfolio showcasing projects and skills.",
      technologyStack: ["JavaScript", "React.js", "Node.js"],
    },
    {
      title: "Tic Tac Toe",
      img: [tictactoeImg1, tictactoeImg2, tictactoeImg3],
      shortDescription:
        "A simple Tic-Tac-Toe game built using React.js with state management and grid logic.",
      technologyStack: ["JavaScript", "React.js", "CSS"],
    },
    {
      title: "Web shop",
      img: [webshopImg1, webshopImg2, webshopImg3],
      shortDescription:
        "An e-commerce shop where users can browse items and manage their shopping cart.",
      technologyStack: ["JavaScript", "React.js", "Node.js"],
    },
    {
      title: "Destination list",
      img: [destinationImg1, destinationImg2, destinationImg3],
      shortDescription:
        "A destination picker app that allows users to select travel locations from a list.",
      technologyStack: ["JavaScript", "React.js", "Node.js"],
    },
    {
      title: "Bachelor Thesis with Vestas",
      img: [bachelorImg1, bachelorImg2, bachelorImg2],
      shortDescription:
        "Data analysis project with real-time processing of large datasets using Python and supercomputers.",
      technologyStack: ["Python", "Pandas", "Microsoft Excel"],
    },
  ];