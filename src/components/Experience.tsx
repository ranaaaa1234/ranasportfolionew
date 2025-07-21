import { CalendarHeart, Users, ExternalLink } from "lucide-react";
import Tooltip from "./Tooltip";

function Experience() {
  const experienceList = [
    {
      role: "Frontend developer intern",
      company: "Arbetsförmedlingen",
      collab: "Agile team collaboration",
      timeLine: "February 2025 – May 2025",
      description:
        "During my internship at Arbetsförmedlingen, I worked on a multi-step form together with the frontend team. We collaborated closely with the UX-design team and followed an agile way of working. Accessibility was a big focus, we followed WCAG guidelines and had a visually impaired user help us test and improve the experience.",
      list: [
        "Fixed bugs",
        "Implemented validation",
        "Improved accessibility",
        "RegEx to validate input",
        "Learned Angular",
      ],
      project: {
        title: "Anställda med stöd",
        tech: ["Angular", "TypeScript", "CSS", "WCAG", "Figma", "Git"],
        live: "https://arbetsformedlingen.se/for-arbetsgivare/anstallningsstod/anmal-ditt-intresse/intro",
      },

      timelineIcon: <CalendarHeart className="w-4 h-4 text-blue-900" />,
      collabIcon: <Users className="w-4 h-4 text-blue-900" />,
    },
    {
      role: "Frontend developer intern",
      company: "Mappi.AI",
      collab: "Team of 3",
      timeLine: " November 2024 – February 2025",
      description:
        "At Mappi.ai, I worked as an UX-designer, in a team, creating prototypes and improving the overall user experience based on user research. I also worked as a frontend developer, my team and I took those designs and brought them to life by implementing them on the website to make it both more functional and visually appealing.",
      list: [
        "Fixed bugs",
        "Implemented carousel to showcase features and tasks",
        "Learned TypeScript",
        "Built and styled modal components for displaying dynamic content",
        "Created wireframes and prototypes in Figma for improvement suggestions and new features",
      ],
      project: {
        title: "Customer Feedback Portal",
        tech: [
          "React",
          "TypeScript",
          "Chakra UI",
          "UX-design",
          "Figma",
          "Wireframes",
          "Docker",
          "Git",
        ],
        live: "https://www.mappi.ai/",
      },

      timelineIcon: <CalendarHeart className="w-4 h-4 text-blue-900" />,
      collabIcon: <Users className="w-4 h-4 text-blue-900" />,
    },
  ];

  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center bg-white py-16 px-4"
    >
      <h2 className="xs:text-3xl sm:text-4xl font-light text-blue-900 mb-4">
        Work experience
      </h2>
      <p className="xs:text-md sm:text-lg text-blue-800 mb-10 text-center max-w-xl">
        These are real projects I’ve built and contributed to.
      </p>

      <div className="grid gap-10 md:grid-cols-1 xl:grid-cols-1 max-w-5xl w-full">
        {experienceList.map((project) => (
          <div
            key={`${project.company}-${project.role}`}
            className=" border border-blue-100 rounded-lg shadow-md flex flex-col justify-between transition-transform hover:scale-[1.02] duration-300"
          >
            <div className="p-6 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-xl font-semibold text-blue-900 mb-0">
                  {project.role}
                </h3>
                <a
                  href="https://www.mappi.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-blue-500 mb-2 hover:opacity-80 hover:underline"
                >
                  {project.company}
                </a>
                <p className="text-blue-900 font-light mb-4 ">
                  {project.description}
                </p>
                {project.list && (
                  <ul className="list-disc pl-5 text-sm text-blue-900 mb-4">
                    {project.list.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}

                <ul className="flex flex-wrap gap-2 text-xs text-blue-900 mb-4">
                  {project.project.tech.map((tech) => (
                    <li
                      key={tech}
                      className="bg-blue-50 px-2 py-1 rounded-md border-blue-100 border hover:opacity-90"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex xs:flex-col sm:flex-row sm:justify-between xs:items-start sm:items-center gap-4 flex-wrap mt-auto">
                <div className="items-start text-sm">
                  <p className="text-blue-900 font-light flex gap-1">
                    {project.timelineIcon}
                    {project.timeLine}
                  </p>
                  <p className="text-blue-900 font-light flex gap-1">
                    {project.collabIcon}
                    {project.collab}
                  </p>
                </div>
                <Tooltip text="View website">
                  <div className="flex gap-2">
                    <a
                      href={project.project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-row gap-1 items-center bg-blue-900 text-white px-4 py-2 rounded-lg hover:opacity-90 text-sm"
                    >
                      {" "}
                      <ExternalLink className="w-4 h-4" />
                      Live demo
                    </a>
                  </div>
                </Tooltip>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
