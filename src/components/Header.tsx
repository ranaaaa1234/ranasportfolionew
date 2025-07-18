import { useState, useEffect } from "react";
import HamburgerMenu from "./hamburgerMenu";

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
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact me", href: "#contact" },
  ];

  return (
  <header> 
    <HamburgerMenu />
    <nav
      className={`hidden lg:block animate-fade-in fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-blue-50 shadow-md border-b mt-0"
          : "bg-transparent mt-10"
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
    </header>
  );
};

export default Header;
