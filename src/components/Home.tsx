import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { Mail, Github, Linkedin } from "lucide-react";
import Tooltip from "./Tooltip";

function Home() {
  const handleScroll = () => {
    const section = document.getElementById("about");
    section?.scrollIntoView({ behavior: "smooth" });
  };
  const email = "ranaa_safi@hotmail.com";

  return (
    <section
      id="home"
      className="min-h-screen px-4 flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-100 to-blue-200"
    >
      <div className="flex flex-col items-center justify-center text-center animate-fade-in">
        <h1 className="xs:text-6xl sm:text-7xl md:text-8xl mt-20 font-extrabold text-blue-900 drop-shadow-lg">
          Rana Safi
        </h1>
        <p className="mt-4 xs:text-3xl  lg:text-4xl  text-blue-600 max-w-sm xs:max-w-xs">
          Frontend developer & UX/UI-designer
        </p>

        <div className="flex flex-row items-center gap-6 py-10 px-4 lg:px-2">
          <Tooltip text="Email">
            <a
              href={`mailto:${email}`}
              target="_blank"
              rel="nooper noreferrer"
              className="flex items-center gap-3 border border-blue-400 text-blue-900 rounded-lg p-3 shadow-sm hover:bg-gradient-to-br from-blue-50 via-purple-100 to-blue-200"
            >
              <Mail className="w-7 h-7" />
            </a>
          </Tooltip>

          <Tooltip text="Github">
            <a
              href="https://github.com/ranaaaa1234"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 border border-blue-400 text-blue-900 rounded-lg p-3 shadow-sm hover:bg-gradient-to-br from-blue-50 via-purple-100 to-blue-200"
            >
              <Github className="w-7 h-7" />
            </a>
          </Tooltip>

          <Tooltip text="LinkedIn">
            <a
              href="https://www.linkedin.com/in/ranna-safi/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 border border-blue-400 text-blue-900 rounded-lg p-3 shadow-sm hover:bg-gradient-to-br from-blue-50 via-purple-100 to-blue-200"
            >
              <Linkedin className="w-7 h-7" />
            </a>
          </Tooltip>
        </div>

        <div>
          <p className="xs:text-xl lg:text-2xl text-blue-900 flex items-center justify-center">
            Explore my portfolio to see my work and skills.
          </p>
        </div>

        <button
          onClick={handleScroll}
          className="mt-20 text-blue-900 animate-bounce transition hover:scale-110 hover:opacity-70 duration-200"
          aria-label="Scroll to about section"
        >
          <ChevronDownIcon className="w-12 h-12 sm:w-16 sm:h-16 text-blue-600" />
        </button>
      </div>
    </section>
  );
}

export default Home;
