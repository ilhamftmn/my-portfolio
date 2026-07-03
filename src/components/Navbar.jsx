import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menus = [
    { name: "About", link: "#about" },
    { name: "Experience", link: "#experience" },
    { name: "Projects", link: "#projects" },
    { name: "Skills", link: "#skills" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-cyan-400">
          Ilham
        </h1>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8 text-slate-300">
          {menus.map((menu) => (
            <li key={menu.name}>
              <a
                href={menu.link}
                className="hover:text-cyan-400 transition"
              >
                {menu.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          {menus.map((menu) => (
            <a
              key={menu.name}
              href={menu.link}
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-4 text-slate-300 hover:bg-slate-800"
            >
              {menu.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;