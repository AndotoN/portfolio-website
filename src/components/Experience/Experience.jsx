// Experience.jsx
import Job from "./Job";
import egsLogo from "../../assets/egs-logo.png";
import linkboxLogo from "../../assets/linkbox-logo.png";
import experienceTimeline from "../../assets/experience-diagram.png";

const jobsData = [
  {
    title: "DevOps Engineer",
    period: "Jan 2023 - Present",
    company: "Energize Global Services",
    location: "Sofia, Bulgaria",
    description: [
      "Designed a Java-based monitoring system to ensure data integrity during migrations from MySQL to MongoDB. Deployed the solution on the company’s cloud infrastructure and automated the process using a Linux TWS scheduler.",
      "Deployed a monitoring solution integrating Grafana with PostgreSQL for real-time data visualization and analysis.",
      "Modified and re-deployed existing software tools using Git, OPS and Nexus Kazan.",
    ],
    logo: egsLogo,
    url: "https://www.linkedin.com/company/egs-bulgaria/mycompany/",
  },
  {
    title: "Junior Webmaster",
    period: "Aug 2021 - Feb 2022",
    company: "Linkbox",
    location: "Remote",
    description: [
      "Conducted SEO analysis using Google Analytics to identify trends and optimize website performance.",
      "Managed website optimization and content updates based on user analytics data.",
      "Collaborated directly with clients to discuss project goals, address concerns, and ensure alignment with SEO and web development strategies.",
    ],
    logo: linkboxLogo,
    url: "https://www.linkbox.com",
  },
  {
    title: "Webmaster intern",
    period: "Jan 2021 - Aug 2022",
    company: "Linkbox",
    location: "Shumen, Bulgaria",
    description: [
      "Conducted SEO analysis using Google Analytics to identify trends and optimize website performance.",
      "Managed website optimization and content updates based on user analytics data.",
      "Collaborated directly with clients to discuss project goals, address concerns, and ensure alignment with SEO and web development strategies.",
    ],
    logo: linkboxLogo,
    url: "https://www.linkbox.com",
  },
];

export default function Experience() {
  return (
    <section className="flex flex-col lg:flex-row mt-10 items-start lg:items-stretch">
      {/* Left side - Jobs list */}
      <div className="lg:w-2/3 w-full lg:pr-8">
        {jobsData.map((job, index) => {
          return (
            <a
              key={index}
              href={job.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Job
                title={job.title}
                period={job.period}
                company={job.company}
                location={job.location}
                description={job.description}
                logo={job.logo}
              />
            </a>
          );
        })}
      </div>

      {/* Right side - Image */}
      <div className="lg:w-1/3 w-full flex lg:flex-col justify-start lg:h-auto h-full">
        <img
          src={experienceTimeline}
          alt="Career Timeline"
          className="w-full h-full object-contain max-h-screen rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}
