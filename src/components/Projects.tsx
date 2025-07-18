import { CalendarHeart, Users, Github, ExternalLink, Ban } from "lucide-react";
import Tooltip from "./Tooltip";

function Projects() {
  const projectList = [
    {
      title: "Portfolio",
      image: "/images/portfolio.jpeg",
      description:
        "A personal portfolio website showcasing my skills and projects.",
      tech: ["React", "TypeScript", "TailwindCSS", "Vercel"],
      timeline: "1 week",
      collab: "Solo project",
      live: "https://ranasportfolio.vercel.app/",
      code: "https://github.com/ranaaaa1234/ranasportfolionew",

      timelineIcon: <CalendarHeart className="w-4 h-4 text-blue-900" />,
      collabIcon: <Users className="w-4 h-4 text-blue-900" />,
    },
    {
      title: "Weather Web-App",
      image: "/images/weatherAppImg.jpeg",
      description:
        "Search any cities weather. Displays temperature, weather condition, and time.",
      tech: ["React", "JavaScript", "CSS", "REST-API", "Netlify"],
      timeline: "1 week",
      collab: "Solo project",
      live: "https://ranasweather.netlify.app/",
      code: "https://github.com/ranaaaa1234/weather-app",

      timelineIcon: <CalendarHeart className="w-4 h-4 text-blue-900" />,
      collabIcon: <Users className="w-4 h-4 text-blue-900" />,
    },
    {
      title: "Chatify",
      image: "/images/chatifyImg.jpeg",
      description:
        "A real-time chat platform with user registration and login functionality. This was my first fullstack project, where I learned to work with MongoDB and REST-APIs.",
      tech: ["React", "JavaScript", "CSS", "MongoDB", "REST-API", "Netlify"],
      timeline: "2 months",
      collab: "Solo project",
      live: "https://chatifyrs4.netlify.app/",
      code: "https://github.com/ranaaaa1234/Chatt-App",

      timelineIcon: <CalendarHeart className="w-4 h-4 text-blue-900" />,
      collabIcon: <Users className="w-4 h-4 text-blue-900" />,
    },
    {
      title: "Food Explorer",
      image: "/images/foodImg.jpeg",
      description:
        "A recipe search app where users can find meal ideas with images. This was one of my first projects where I learned to work with APIs.",
      tech: ["React", "JavaScript", "CSS", "REST-API", "Netlify"],
      timeline: "1 month",
      collab: "Solo project",
      live: null,
      code: "https://github.com/ranaaaa1234/food-app",

      timelineIcon: <CalendarHeart className="w-4 h-4 text-blue-900" />,
      collabIcon: <Users className="w-4 h-4 text-blue-900" />,
    },
  ];

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center bg-white py-16 px-4"
    >
      <h2 className="xs:text-3xl sm:text-4xl font-light text-blue-900 mb-4">
        My Projects
      </h2>
      <p className="xs:text-md sm:text-lg text-blue-800 mb-10 text-center max-w-xl">
        Here are some of my own projects I've worked on.
      </p>

      <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-2 max-w-7xl w-full">
        {projectList.map((project) => (
          <div
            key={project.title}
            className=" border border-blue-100 rounded-lg shadow-md flex flex-col justify-between transition-transform hover:scale-[1.02] duration-300"
          >
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-6 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-blue-900 font-light mb-4">
                  {project.description}
                </p>
                <ul className="flex flex-wrap gap-2 text-xs text-blue-900 mb-4">
                  {project.tech.map((tech) => (
                    <li
                      key={tech}
                      className="bg-blue-50 px-2 py-1 rounded-md border-blue-100 border hover:opacity-90"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-between items-center gap-4 flex-wrap mt-auto">
                <div className="items-start text-sm">
                  <p className="text-blue-900 font-light flex gap-1">
                    {project.timelineIcon}
                    {project.timeline}
                  </p>
                  <p className="text-blue-900 font-light flex gap-1">
                    {project.collabIcon}
                    {project.collab}
                  </p>
                </div>

                <div className="flex gap-2">
                  <Tooltip text="View code on GitHub">
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-row gap-1 items-center border border-blue-100 text-blue-900 px-4 py-2 rounded-lg hover:opacity-70 text-sm"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Tooltip>

                  {project.live ? (
                    <Tooltip text="View website">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-row gap-1 items-center bg-blue-900 text-white px-4 py-2 rounded-lg hover:opacity-90 text-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live demo
                      </a>
                    </Tooltip>
                  ) : (
                    <Tooltip text="Website unavailable">
                      <span className="flex flex-row gap-1 items-center bg-gray-300 text-gray-500 px-3 py-2 rounded-lg text-sm">
                        <Ban className="w-4 h-4"></Ban>
                        Unavailable
                      </span>
                    </Tooltip>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
