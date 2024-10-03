// AboutMe.jsx
import Passion from "./Passion.jsx";
import Education from "./Education.jsx";
import Hero from "./Hero.jsx";
import Hobbies from "./Hobbies.jsx";

const higherEdDescriptions = [
  "Collaborated with multidisciplinary teams of engineers to solve complex problems.",
  "Engaged in industry-driven projects with Danish companies.",
  "Completed a bachelor thesis in collaboration with Vestas.",
];

const highSchoolDescriptions = [
  "Participated in the software technology teacher's team to maintain the school computers.",
  "Took part in the basketball team that finished first in the national competion for two years in a row.",
  "Entered a few history competitions with moderate results",
];

export default function AboutMe() {
  return (
    <>
      <Hero />
      <Education
        header={"Bachelor degree"}
        title={"Software Engineering at VIA University College"}
        periodLocation={"2017 - 2022 / Aarhus, Denmark"}
        descriptions={higherEdDescriptions}
      />
      <Education
        header={"High school education"}
        title={"Nancho Popovich - Applied Science and Mathematics "}
        periodLocation={"2012 - 2017 / Shumen, Bulgaria"}
        descriptions={highSchoolDescriptions}
      />
      <Passion />
      <Hobbies />
    </>
  );
}
