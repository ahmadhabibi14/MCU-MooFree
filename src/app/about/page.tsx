"use client"
import { fetchMovieData } from "@/api/fetch_movie_data";
import {useEffect} from "react"
// export const metadata = {
//    title: 'About',
//    description: 'Your Marvel movies',
//    openGraph: {
//      title: 'MovFree',
//      images: '/next.svg',
//    },
//  }

export default function About() {
   async function fndogn() {
      const data = await fetchMovieData("1726")
      console.log(data)
   }
   useEffect(() => {
      fndogn();
   }, [])
   
   return (
      <div>
         <h2>About</h2>
      </div>
   )
}