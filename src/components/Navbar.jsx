import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  const [theme, setTheme] = useState("dark");
  if (theme === "dark") {
    localStorage.theme = "dark";
  } else {
    localStorage.theme = "light";
  }

  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  return (
    <nav
      className="w-full h-16 border-b border-zinc-300 dark:border-zinc-700 flex justify-center
      dark:bg-zinc-900 dark:bg-opacity-70
      fixed bg-zinc-100 top-0 bg-opacity-60 backdrop-blur"
    >
      <div className="flex flex-row justify-between items-center md:w-11/12">
        <div className="flex flex-row space-x-6 items-center">
          <Link to="/">
            <svg viewBox="0 0 512 512" className="w-8">
              <path
                fill="currentColor"
                className="hover:fill-red-500"
                d="M188.3 147.1C195.8 142.8 205.1 142.1 212.5 147.5L356.5 235.5C363.6
              239.9 368 247.6 368 256C368 264.4 363.6 272.1 356.5 276.5L212.5 364.5C205.1
              369 195.8 369.2 188.3 364.9C180.7 360.7 176 352.7 176 344V167.1C176
              159.3 180.7 151.3 188.3 147.1V147.1zM512 256C512 397.4 397.4 512 256
              512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512
              256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464
              464 370.9 464 256C464 141.1 370.9 48 256 48z"
              />
            </svg>
          </Link>
          <span className="w-px bg-zinc-300 dark:bg-zinc-600 h-6"></span>
          <div className="flex flex-row space-x-6 items-center">
            <NavLink exact="true" to="/" className="hover:text-red-500">
              Home
            </NavLink>
            <NavLink to="/about" className="hover:text-red-500">
              About
            </NavLink>
            <NavLink to="/movies" className="hover:text-red-500">
              Movies
            </NavLink>
            <NavLink to="/comics" className="hover:text-red-500">
              Comics
            </NavLink>
            <NavLink to="/news" className="hover:text-red-500">
              News
            </NavLink>
            <NavLink
              to="/community"
              className="flex flex-row space-x-2 items-center"
            >
              <span className="hover:text-red-500">Community</span>
              <span className="py-0.5 px-2 text-xs rounded-full bg-red-400/10 text-red-500 bg-opacity-40">
                New
              </span>
            </NavLink>
          </div>
        </div>
        <div className="flex flex-row space-x-3 text-sm items-center">
          <button className="flex flex-row space-x-2 mr-2 border dark:border-zinc-700 border-zinc-300 bg-zinc-200 dark:bg-zinc-800 bg-zinc-200 py-1.5 px-2 rounded-full
            ">
            <svg
              className="stroke-zinc-400 dark:stroke-zinc-400"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input type="text" name="search" id="search" placeholder="Search..." className="dark:bg-zinc-800 bg-zinc-200 outline-none ring-0" />
          </button>
          <button
            onClick={() => {
              setTheme(theme === "dark" ? "light" : "dark");
            }}
            className="py-1.5 pl-2 pr-2.5 rounded-full border border-zinc-300 dark:border-zinc-700 hover:border-red-500 dark:hover:border-red-500 hover:text-red-500 flex flex-row items-center"
          >
            <svg
              className="block dark:hidden mr-1.5"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>

            <svg
              className="hidden dark:block mr-1.5"
              width="19"
              height="19"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>

            <span className="block dark:hidden">Light</span>
            <span className="hidden dark:block">Dark</span>
          </button>
          <button className="px-3 py-1.5 border border-red-400 rounded-full bg-red-500 text-zinc-100 hover:bg-red-400">
            Subscribe
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
