import { CalendarHeart, Users } from "lucide-react";    

function Experience() {
 const experienceList = [
  {
    company: "Company Name 1",
    role: "Frontend Developer Intern",
    timeLine: "June 2024 – August 2024",
    description: "Worked on a real-world dashboard used by internal staff to monitor performance.",
    project: {
      title: "Internal Dashboard",
      tech: ["React", "TypeScript", "Tailwind CSS", "REST API"],
      live: null, 
    },
          
      timelineIcon: <CalendarHeart className="w-4 h-4 text-blue-900" />,
      collabIcon: <Users className="w-4 h-4 text-blue-900" />,
  },
  {
    company: "Company Name 2",
    role: "Fullstack Intern",
    timeLine: "January 2024 – March 2024",
    description: "Built features for a customer feedback platform including frontend forms and backend APIs.",
    project: {
      name: "Customer Feedback Portal",
      tech: ["React", "Node.js", "Express", "MongoDB", "REST API"],
      live: null,
    },
          
      timelineIcon: <CalendarHeart className="w-4 h-4 text-blue-900" />,
      collabIcon: <Users className="w-4 h-4 text-blue-900" />,
  },
];

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center bg-white py-16 px-4"
    >
      <h2 className="text-4xl font-light text-blue-900 mb-4">My Projects</h2>
      <p className="text-lg text-blue-800 mb-10 text-center max-w-xl">
        Here are some of the projects I've worked on.
      </p>

      <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-2 max-w-7xl w-full">
        {experienceList.map((project) => (
          <div
            key={`${project.company}-${project.role}`}
            className=" border border-blue-100 rounded-lg shadow-md overflow-hidden flex flex-col justify-between transition-transform hover:scale-[1.02] duration-300"
          >
            <div className="p-6 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                  {project.project.title || project.project.name}
                </h3>
                <p className="text-blue-900 font-light mb-4">
                  {project.description}
                </p>
                <ul className="flex flex-wrap gap-2 text-xs text-blue-900 mb-4">
                  {project.project.tech.map((tech) => (
                    <li
                      key={tech}
                      className="bg-blue-50 px-2 py-1 rounded-md border-blue-100 border hover:opacity-70"
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
                    {project.timeLine}
                  </p>
                  <p className="text-blue-900 font-light flex gap-1">
                    {project.collabIcon}
                    {project.role}
                  </p>
                </div>

                <div className="flex gap-2">
                  <a
                    ref={project.project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-blue-100 text-blue-900 px-4 py-2 rounded-lg hover:opacity-70 text-sm"
                  >
                    Code
                  </a>

                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
