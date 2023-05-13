"use client"
import Link from "next/link"
import { useState, useEffect } from "react"
import { navbar_items } from "@/data/navbar/navbar_items";

export default function NavBar() {
   let [theme, setTheme] = useState("dark");
   if (theme === "dark") {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
   } else {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
   }

   useEffect(() => {
      localStorage.getItem("theme")
      if (localStorage.theme == "dark") {
         document.documentElement.classList.add("dark");
      } else {
         document.documentElement.classList.remove("dark");
      }
   }, []);

   return (
      <nav className="navbar">
         <div className="flex flex-row justify-between items-center md:w-11/12">
            <div className="flex flex-row space-x-6 items-center">
               <Link href="/">
                  <label className="cursor-pointer group/edit w-10 h-10 border border-red-400 bg-red-500 rounded-xl flex items-center justify-center">
                     <svg
                        className="h-[25px] w-auto group-hover/edit:h-[22px] duration-100 text-zinc-100"
                        viewBox="0 0 119.06248 211.66667"
                     >
                        <defs id="defs2" />
                        <path
                           fill="currentColor"
                           d="m 5.7253576,0 1.3965778,208.08131 32.6625626,2.80273 -2.1611,-88.53625
                              15.115272,83.6521 12.826198,0.3674 13.709582,-82.98516 1.459751,85.94404
                              32.357309,2.34048 L 109.46708,2.732323 74.863564,1.584347 61.963686,107.4527
                              47.617656,1.8817715 Z"
                        />
                     </svg>
                  </label>
               </Link>
               <span className="w-px bg-zinc-300 dark:bg-zinc-600 h-6"></span>
               <div className="flex flex-row space-x-6 items-center">
                  {navbar_items.map((item, idx) => (
                     <Link
                        key={idx}
                        href={item.path}
                        className="hover:text-red-500 py-[8px]">
                        {item.label}
                     </Link>
                  ))}
               <span className="!ml-[8px] py-0.5 px-2 text-xs rounded-full bg-red-400/10 text-red-500 bg-opacity-40">
                  New
               </span>
            </div>
        </div>
        <div className="flex flex-row space-x-3 text-sm items-center">
          <button
            className="flex flex-row space-x-2 border dark:border-zinc-700 border-zinc-300 bg-zinc-200 dark:bg-zinc-900 py-1.5 px-2 rounded-full
            "
          >
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
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search..."
              className="dark:bg-zinc-900 bg-zinc-200 outline-none ring-0"
            />
          </button>
          <button
            onClick={() => {
              setTheme(theme === "dark" ? "light" : "dark");
            }}
            className="py-1.5 pl-2 pr-2.5 rounded-full border group
              border-zinc-400 dark:border-zinc-700 hover:border-red-500 dark:hover:border-red-500 hover:text-red-500
              text-zinc-700 dark:text-zinc-300 dark:hover:text-red-500 flex flex-row items-center"
          >
            <svg
              className="block dark:hidden mr-1.5 fill-none"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" className="group-hover:fill-red-500"/>
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
              className="hidden dark:block mr-1.5 fill-none group-hover:fill-red-500"
              width="19"
              height="19"
              viewBox="0 0 24 24"
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
   )
}