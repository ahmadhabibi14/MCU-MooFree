import { movie_items } from "@/data/movies/movies_list"
import { MoviesHeading } from "@/components/movies/heading"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
   title: 'Movies',
   description: 'Your Marvel movies',
   openGraph: {
     title: 'MovFree',
     images: '/next.svg',
   },
 }

export default function Movies() {
   return (
      <div className="h-fit">
         <section className="w-full h-fit">
            <MoviesHeading />
            <div className="relative w-11/12 mx-auto top-[-35px] inset-x-0 py-6 px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center dark:bg-zinc-800 bg-zinc-200 dark:border-zinc-700 border-zinc-300 border rounded-md shadow-xl">
               {movie_items.map((item, idx) => (
                  <Link href={`/movie/${item.path}`} key={idx} title={item.title} className="z-20 cursor-pointer transition-all duration-200 ease-linear hover:scale-105 group flex flex-col space-y-2 w-44 p-3">
                     <div className="w-full h-auto rounded-md overflow-hidden dark:border-zinc-700 border-zinc-300">
                        <Image
                           src={item.img}
                           alt={item.title}
                           width={382}
                           height={566}
                           className="h-full w-full object-cover rounded-md hover:scale-125 duration-300 z-10"
                        />
                     </div>
                     <div className="grow flex flex-col justify-between space-y-2">
                        <p className="font-semibold text-sm group-hover:underline">{item.title}</p>
                        <p className="py-0.5 px-3 w-fit rounded-full border-zinc-400 dark:border-zinc-700 border text-xs font-semibold text-red-500">{item.release_year}</p>
                     </div>
                  </Link>
               ))}
            </div>
         </section>
      </div>
   )
}