import { fetchMovieData } from "@/api/fetch_movie_data";
import { getMovieById, getMoviePoster, movieObjectMap } from "@/data/movies/movie_page_details";
import Image from "next/image"
const ColorThief = require('colorthief');

export function generateStaticParams() {
  return Object.values(movieObjectMap).map((obj) => obj.id);
}

export default async function Post({ params }: { params: { id: string } }) {
  const { id } = params;
  const movieId = getMovieById(id)
  const imgPoster = getMoviePoster(id)
  const movieData = await fetchMovieData(movieId)

  const img = `https://image.tmdb.org/t/p/original/${movieData.backdrop_path}`
  const colors = await ColorThief.getPalette(img, 5)
  const bgBackdrop = colors[3]
  const rgbaBackdrop = `rgba(${bgBackdrop[0]}, ${bgBackdrop[1]}, ${bgBackdrop[2]}, 0.75)`;
  return (
    <div className="h-fit">
      <header className="text-zinc-200">
         <div className="w-full h-[400px] overflow-hidden">
            <Image
               src={`https://image.tmdb.org/t/p/original/${movieData.backdrop_path}`}
               width={2000}
               height={980}
               alt="Hero"
               className="object-cover w-full h-auto"
            />
         </div>
         <div style={{backgroundColor: rgbaBackdrop}} className="h-[460px] w-full top-0 absolute z-10"></div>
         <div className="hidden dark:block h-[200px] w-full top-[260px] absolute z-20 bg-gradient-to-t dark:from-zinc-900 to-transparent "></div>
         {/* Properties*/}
         <div className="z-30 absolute top-[64px] w-full h-[438px] px-28 py-16 flex flex-row gap-12">
            <div className="w-44">
               <Image
                  src={`/img/MoviesImage/${imgPoster}`}
                  width={382}
                  height={566}
                  alt="Hero"
                  className="object-cover w-full h-auto shadow-lg border border-zinc-600"
            />
            </div>
            <div>
               <h1 className="font-extrabold text-4xl">
                  {movieData.title}   
               </h1>
            </div>
         </div>
      </header>
    </div>
  );
}