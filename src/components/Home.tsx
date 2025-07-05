import { ChevronDownIcon } from "@heroicons/react/16/solid";

function Home() {
  const handleScroll = () => {
    const section = document.getElementById("about");
    section?.scrollIntoView({ behavior: "smooth" });
  };

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
        <div>
          <p className="mt-20 sm:text-lg md:text-xl lg:text-2xl text-blue-900 flex items-center justify-center">
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
