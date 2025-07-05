import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About me", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact me", href: "#contact" },
];
const [isOpen, setIsOpen] = useState(false);

function HamburgerMenu() {
  return (
    <section className="lg:hidden">
      <button
        className="text-blue-50 p-2 fixed top-4 right-4 z-50 bg-blue-900 rounded-full shadow-md transition-transform duration-300 hover:scale-110"
        aria-label="Toggle menu"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>
      <div
        className={`fixed top-16 left-0 w-full px-4 z-40 transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-10 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-3 items-start p-5 bg-blue-50 rounded-lg shadow-md border border-blue-200">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-blue-900 font-light text-lg hover:text-opacity-70 transition duration-200 hover:scale-105"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default HamburgerMenu;
