"use client"
import Link from "next/link"
import { useEffect } from "react"
import { navbar_items } from "@/data/navbar/navbar_items"
import messageForHackers from "@/utils/messageForHackers"
import ThemeToggle from "@/components/theme_toggle"

export default function NavBar() {
   useEffect(() => {
      messageForHackers();
   }, []);

   return (
      <header className="navbar">
         <div className="flex flex-row justify-between items-center w-full mx-4 xl:mx-0 xl:w-11/12 2xl:w-9/12">
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
               <span className="hidden xl:block w-px bg-zinc-300 dark:bg-zinc-600 h-6"></span>
               <nav className="hidden xl:flex flex-row space-x-6 items-center">
                  {navbar_items.map((item, idx) => (
                     <Link
                        key={idx}
                        href={item.path}
                        className="hover:text-red-500 py-[8px]">
                        {item.label}
                     </Link>
                  ))}
               </nav>
            </div>
            <div className="flex flex-row space-x-3 text-sm items-center">
               <button className="flex flex-row space-x-2 border dark:border-zinc-700 border-zinc-300 bg-zinc-200 dark:bg-zinc-900 py-1.5 px-2 rounded-full">
                  <svg className="stroke-zinc-400 dark:stroke-zinc-400" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
               <ThemeToggle />
               <button className="px-3 py-1.5 border border-red-400 rounded-full bg-red-500 text-zinc-100 hover:bg-red-400">
                  Subscribe
               </button>
            </div>
         </div>

         {/* Navbar Mobile */}
      </header>
   )
}