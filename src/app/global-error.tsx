"use client";
import "./globals.css"

export default function GlobalError() {
   return (
      <html lang="en">
      <body className="flex flex-col items-center justify-center space-y-4 font-poppins h-screen dark:bg-zinc-900 dark:text-zinc-200 text-zinc-800">
         <h2 className="text-2xl font-bold">Something went wrong!</h2>
         <a href="/" className="py-2 px-6 bg-blue-500 text-zinc-200 rounded-lg">Back to Home</a>
      </body>
   </html>
   );
}