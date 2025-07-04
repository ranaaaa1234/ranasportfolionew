import { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About me", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact me", href: "#contact" },
  ];

  return (
    <nav
      className={` animate-fade-in fixed top-0 pt-10 w-full z-50 transition-all duration-300 bg-50 ${
        scrolled
          ? "bg-blue-50 shadow-md border-b top-0 pt-0"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-7">
        <div className="flex items-center justify-center py-4">
          <ul className="flex flex-wrap justify-center space-x-20">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-blue-900 font-light text-xl hover:text-opacity-70 transition duration-200 hover:scale-105"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
