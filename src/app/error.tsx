"use client";
import { useEffect } from "react";

export default function Error({error, reset}: any) {
   useEffect(() => {
      // Log the error to an error reporting service
      console.error(error);
   }, [error]);

   return (
      <div>
         <h2 className="text-2xl font-bold">Something went wrong!</h2>
         <a href="/" className="py-2 px-6 bg-blue-500 text-zinc-200 rounded-lg">Back to Home</a>
         <button onClick={() => reset()}>Try Again</button>
      </div>
   );
}