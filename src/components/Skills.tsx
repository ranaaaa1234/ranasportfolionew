import {
  Code,
  Microscope,
  Component,
  FileCode,
  Palette,
  Accessibility,
  Search,
  Figma,
  Network,
} from "lucide-react";

function Skills() {
  const frontendSkills = [
    {
      name: "HTML / CSS",
      icon: <FileCode className="w-5 h-5 text-blue-700" />,
    },
    {
      name: "React / Angular",
      icon: <Component className="w-5 h-5 text-blue-700" />,
    },
    {
      name: "TypeScript / JavaScript",
      icon: <Code className="w-5 h-5 text-blue-700" />,
    },
    {
      name: "Tailwind CSS / Chakra UI",
      icon: <Palette className="w-5 h-5 text-blue-700" />,
    },
    {
      name: "REST-API",
      icon: <Network className="w-5 h-5 text-blue-700" />,
    },
  ];

  const uxSkills = [
    {
      name: "Wireframing",
      icon: <FileCode className="w-5 h-5 text-blue-700" />,
    },
    {
      name: "Prototyping (Figma)",
      icon: <Figma className="w-5 h-5 text-blue-700" />,
    },
    {
      name: " WCAG / Accessibility",
      icon: <Accessibility className="w-5 h-5 text-blue-700" />,
    },
    {
      name: "User Research",
      icon: <Search className="w-5 h-5 text-blue-700" />,
    },
    {
      name: "User Testing",
      icon: <Microscope className="w-5 h-5 text-blue-700" />,
    },
  ];

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center bg-blue-50 py-16"
    >
      <h2 className="xs:text-3xl sm:text-4xl font-light text-blue-900 mb-5">
        My skills in frontend and design
      </h2>
      <p className="text-blue-700 xs:text-md sm:text-lg text-center xs:max-w-md sm:max-w-3xl mb-20">
        A selection of the tools and techniques I use in frontend development
        and UX/UI design. I'm always eager to grow, learn, and expand my
        skillset.
      </p>

      <div className="flex flex-col md:flex-row xs:gap-10 md:gap-20 justify-center items-center">
        {/* Frontend */}
        <div className="bg-white p-8 rounded-lg shadow-md w-[320px] text-left border border-blue-100 flex flex-col justify-start">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">Frontend</h3>
          <ul className="text-blue-700 space-y-2">
            {frontendSkills.map((item) => (
              <li
                key={item.name}
                className="flex items-center gap-2 bg-blue-50 rounded-lg p-1 shadow-sm hover:opacity-70"
              >
                {item.icon}
                <span className="text-blue-900 font-light text-lg">
                  {item.name}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* UX & UI */}
        <div className="bg-white p-8 rounded-lg shadow-md w-[320px] text-left border border-blue-200 flex flex-col justify-start">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">
            UX & UI Design
          </h3>
          <ul className="text-blue-700 space-y-2">
            {uxSkills.map((item) => (
              <li
                key={item.name}
                className="flex items-center gap-2 bg-blue-50 rounded-lg p-1 shadow-sm hover:opacity-70"
              >
                {item.icon}
                <span className="text-blue-900 font-light text-lg">
                  {item.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
