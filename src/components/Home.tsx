import { ChevronDownIcon } from "@heroicons/react/16/solid";

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-100 to-blue-200"
    >
      <div className="flex flex-col items-center justify-center text-center animate-fade-in">
        <h1 className="text-8xl mt-20 font-extrabold text-blue-900 drop-shadow-lg">
          Rana Safi
        </h1>
        <p className="mt-4 text-4xl text-blue-600 max-w-xs">
          Frontend developer & UX/UI-designer
        </p>
        <div>
          <p className="mt-20 text-2xl text-blue-900 flex items-center justify-center">
            Explore my portfolio to see my work and skills.
          </p>
        </div>

        <button className="transition hover:scale-105 hover:text-opacity-70 duration-200 mt-20 text-blue-900">
          <ChevronDownIcon className="w-10 h-10" />
        </button>
      </div>
    </section>
  );
}

export default Home;
