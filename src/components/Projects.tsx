function Projects() {
  const projectList = [
    {
      title: "Calculator",
      image: "/images/calculator.png", 
      description:
        "A calculator built with TypeScript. It lets you subtract, divide, add, and multiply.",
      tech: ["TypeScript", "CSS"],
      live: "https://ranascalculator.netlify.app/",
      code: "https://github.com/ranaaaa1234/ts-kalklator.git",
    },
    {
      title: "Weather Web-App",
      image: "/images/weather.png",
      description:
        "Search any city’s weather. Displays temperature, weather condition, and time.",
      tech: ["React", "JavaScript", "CSS"],
      live: "https://ranasweather.netlify.app/",
      code: "https://github.com/ranaaaa1234/weather-app",
    },
    {
      title: "Chatify",
      image: "/images/chatify.png",
      description:
        "A chat platform with user registration and login functionality.",
      tech: ["React", "JavaScript", "CSS", "MongoDB", "Node.js"],
      live: "https://chatifyrs4.netlify.app/",
      code: "https://github.com/ranaaaa1234/Chatt-App",
    },
    {
      title: "Food Explorer",
      image: "/images/food.png",
      description:
        "A recipe search app where users can find meal ideas with images.",
      tech: ["React", "JavaScript", "CSS"],
      live: null,
      code: "https://github.com/ranaaaa1234/food-app",
    },
    {
      title: "To-do List",
      image: "/images/todo.png",
      description:
        "Create, edit, and delete tasks. Move finished ones to a 'done' section.",
      tech: ["JavaScript", "HTML", "CSS"],
      live: "https://ranastasklist.netlify.app/",
      code: "https://github.com/ranaaaa1234/Applikation-inl-mning.git",
    },
  ];

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center bg-white py-16 px-4"
    >
      <h2 className="text-4xl font-light text-blue-900 mb-4">My Projects</h2>
      <p className="text-lg text-blue-800 mb-10 text-center max-w-xl">
        Here are some of the projects I've worked on. I'm always building and
        improving my skills!
      </p>

      <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3 max-w-6xl w-full">
        {projectList.map((project) => (
          <div
            key={project.title}
            className="bg-blue-50 rounded-xl shadow-md overflow-hidden flex flex-col justify-between transition-transform hover:scale-[1.02] duration-300"
            data-aos="fade-up"
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
                <h3 className="text-2xl font-semibold text-blue-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-blue-900 font-light mb-4">
                  {project.description}
                </p>
                <ul className="flex flex-wrap gap-2 text-sm text-blue-700 mb-4">
                  {project.tech.map((tech) => (
                    <li
                      key={tech}
                      className="bg-blue-100 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex gap-4 mt-auto">
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm"
                  >
                    Live Demo
                  </a>
                ) : (
                  <span className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm">
                    No Live Demo
                  </span>
                )}
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border border-blue-800 text-blue-800 px-4 py-2 rounded-lg hover:bg-blue-800 hover:text-white text-sm"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
