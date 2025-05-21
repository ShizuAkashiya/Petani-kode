import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import homeIcon from "../assets/home.png";
import kelasIcon from "../assets/kelas.png";
import tutorialIcon from "../assets/tutorial.png";
import bukuIcon from "../assets/buku.png";
import discordIcon from "../assets/discord.png";
import searchIcon from "../assets/search.png";
import sunIcon from "../assets/sun.png";
import moonIcon from "../assets/moon.png";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark" || window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="bg-teal-600 dark:bg-teal-900 text-white sticky top-0 z-40 shadow-md">
      <div className="container mx-auto px-4 lg:max-w-7xl flex justify-between">

        <div className="flex flex-row gap-1 items-center py-3 md:py-2">

          <Link to="/" className="inline-block mr-2" aria-label="Go to home">
            <svg viewBox="0 0 64 64" className="w-8 h-8 active:scale-95">
              <g transform="translate(0 -988.36)">
                <path
                  d="m32 991.45c16.017.0 28.911 12.894 28.911 28.911S48.017 1049.272 32 1049.272s-28.911-12.894-28.911-28.911S15.983 991.45 32 991.45z"
                  stroke="#fff"
                  strokeWidth="4.9018"
                  fill="teal"
                  className="hover:fill-teal-500"/>
                <path d="m40.027 1002.9-28.596 8.3852 41.137 18.986z" fill="#fff" />
                <path d="m21.869 1017.7.14738 5.203.19841 7.0046 2.7399-.4921 2.7642 7.9199 15.535-9.5z" fill="#fff" />
              </g>
            </svg>
          </Link>


          <Link
            to="/home"
            className="hidden md:inline-flex items-center gap-1 px-3 py-2 rounded-lg font-medium text-gray-100 hover:bg-teal-700 focus:ring-2 focus:ring-teal-500">
            <img src={homeIcon} alt="Home" className="w-5 h-5 filter brightness-0 invert" />
            Home
          </Link>

          <Link
            to="/kelas"
            className="hidden md:inline-flex items-center gap-1 px-3 py-2 rounded-lg font-medium text-gray-100 hover:bg-teal-700 focus:ring-2 focus:ring-teal-500">
            <img src={kelasIcon} alt="Kelas" className="w-5 h-5 filter brightness-0 invert" />
            Kelas
          </Link>

          <Link
            to="/tutorial"
            className="hidden md:inline-flex items-center gap-1 px-3 py-2 rounded-lg font-medium text-gray-100 hover:bg-teal-700 focus:ring-2 focus:ring-teal-500">
            <img src={tutorialIcon} alt="Tutorial" className="w-5 h-5 filter brightness-0 invert" />
            Tutorial
          </Link>

          <Link
            to="/buku"
            className="hidden md:inline-flex items-center gap-1 px-3 py-2 rounded-lg font-medium text-gray-100 hover:bg-teal-700 focus:ring-2 focus:ring-teal-500">
            <img src={bukuIcon} alt="Buku" className="w-5 h-5 filter brightness-0 invert" />
            Buku
          </Link>

          <Link
            to="/discord"
            className="hidden md:inline-flex items-center gap-1 px-3 py-2 rounded-lg font-medium text-gray-100 hover:bg-teal-700 focus:ring-2 focus:ring-teal-500">
            <img src={discordIcon} alt="Discord" className="w-5 h-5 filter brightness-0 invert" />
            Discord
          </Link>
        </div>

        <div className="flex items-center gap-3 ml-6">
          <Link
            to="/search"
            className="p-1 rounded-full text-teal-100 hover:bg-teal-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
            aria-label="Search">
            <img src={searchIcon} alt="Search" className="w-6 h-6 filter brightness-0 invert" />
          </Link>

     
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-1 rounded-full text-teal-100 hover:bg-teal-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
            aria-label="Toggle theme">
            <img
              src={darkMode ? sunIcon : moonIcon}
              alt="Theme Icon"
              className="w-6 h-6 transition-transform duration-200 active:scale-95 filter brightness-0 invert"/>
          </button>

          
          <Link
            to="/newsletter"
            className="hidden lg:inline-block px-3 py-2 bg-teal-500 hover:bg-teal-700 focus:ring-2 focus:ring-teal-400 rounded-lg active:bg-teal-500">
            Join Newsletter
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
