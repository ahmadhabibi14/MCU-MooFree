"use client"
import { useState, useEffect } from "react"

export default function ThemeToggle() {
   let [theme, setTheme] = useState("dark");
   if (typeof window !== "undefined") {
      if (theme === "dark") {
         localStorage.setItem("theme", "dark")
         document.documentElement.classList.add("dark");
      } else {
         localStorage.setItem("theme", "light")
         document.documentElement.classList.remove("dark");
      }
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
      <button onClick={() => { setTheme(theme === "dark" ? "light" : "dark"); }}
         className="py-1.5 pl-2 pr-2.5 rounded-full border group
            border-zinc-400 dark:border-zinc-700 hover:border-red-500 dark:hover:border-red-500 hover:text-red-500
            text-zinc-700 dark:text-zinc-300 dark:hover:text-red-500 flex flex-row items-center"
      >
         <svg className="block dark:hidden mr-1.5 fill-none" width="18" height="18" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
         <svg className="hidden dark:block mr-1.5 fill-none group-hover:fill-red-500" width="19" height="19" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
         </svg>
         <span className="block dark:hidden">Light</span>
         <span className="hidden dark:block">Dark</span>
      </button>
   )
}