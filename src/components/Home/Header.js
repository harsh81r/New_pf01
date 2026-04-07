
import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [dark, setDark] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Apply dark mode
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/5 border-b border-white/10 shadow-lg">

      <nav className="px-6 py-3 max-w-7xl mx-auto flex justify-between items-center">

        {/* LEFT SIDE (LOGO + TOGGLE) */}
        <div className="flex items-center gap-4">

        
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 transition"
          >
            
          </button>

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="./myph.png"
              className="h-10 w-10 rounded-full border border-blue-400"
              alt="Logo"
            />
            <span className="text-white font-bold text-lg hidden sm:block">
              Harsh
            </span>
          </Link>

        </div>

        {/* DESKTOP NAV */}
        <ul className="hidden lg:flex gap-8 font-medium">

          {[
            { name: "Home", path: "/" },
            { name: "Projects", path: "/about" },
            { name: "Contact", path: "/contact" },
            { name: "Github", path: "/github" }
          ].map((item, i) => (
            <li key={i}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `relative px-2 py-1 transition duration-300 ${
                    isActive
                      ? "text-blue-400"
                      : "text-gray-300 hover:text-white"
                  }`
                }
              >
                {item.name}

                {/* UNDERLINE ANIMATION */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            </li>
          ))}

        </ul>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-blue-400"
        >
          ☰
        </button>

      </nav>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="lg:hidden px-6 pb-4 bg-slate-900/95 backdrop-blur-xl">

          <ul className="flex flex-col gap-4 font-semibold">

            {[
              { name: "Home", path: "/" },
              { name: "Projects", path: "/about" },
              { name: "Contact", path: "/contact" },
              { name: "Github", path: "/github" }
            ].map((item, i) => (
              <li key={i}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded-lg transition ${
                      isActive
                        ? "bg-blue-500 text-white"
                        : "text-gray-300 hover:bg-slate-800"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}

          </ul>

        </div>
      )}

    </header>
  );
}

export default Header;