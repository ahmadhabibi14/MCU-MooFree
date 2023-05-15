import { movie_items } from "@/data/movies/movies_list"
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
      <div className="h-full w-full pt-24 px-14 ">
         <div className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
            {movie_items.map((item, idx) => (
               <Link href={`/movies/${item.path}`} key={idx} title={item.title} className="z-20 cursor-pointer transition-all duration-200 ease-linear hover:scale-105 group flex flex-col space-y-2 justify-between w-44 border rounded-md p-3 shadow-lg dark:bg-zinc-950 bg-zinc-200 dark:border-zinc-700 border-zinc-300">
                  <div className="w-full h-auto rounded-md overflow-hidden dark:border-zinc-700 border-zinc-300">
                     <Image
                        src={item.img}
                        alt={item.title}
                        width={382}
                        height={566}
                        className="h-full w-full object-cover rounded-md hover:scale-125 duration-300 z-10"
                     />
                  </div>
                  <p className="font-semibold text-sm group-hover:text-red-600 group-hover:underline">{item.title}</p>
                  <p className="text-xs py-0.5 px-2 rounded-full w-fit border border-zinc-400 dark:border-zinc-700 dark:bg-zinc-900 bg-zinc-300">
                     {item.release_year}
                  </p>
               </Link>
            ))}
         </div>
      </div>
   )
}