"use client";
import { useEffect, useState } from "react";

function useDarkMode() {
   const [theme, setTheme] = useState(
      typeof window !== "undefined" ? localStorage.theme : "dark"
   );
   const controlTheme = theme === "dark" ? "light" : "dark";
   useEffect(() => {
      const root = window.document.documentElement;
      root.classList.remove(controlTheme);
      root.classList.add(theme);

      localStorage.setItem("theme", theme)
   });

   return [theme, setTheme]
}

export default useDarkMode;