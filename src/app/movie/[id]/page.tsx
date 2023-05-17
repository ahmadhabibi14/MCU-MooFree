import { fetchMovieData } from "@/api/fetch_movie_data";
import { getMovieById, movieObjectMap } from "@/data/movies/movie_page_details";
import Image from "next/image"

export function generateStaticParams() {
  return Object.values(movieObjectMap).map((obj) => obj.id);
}

export default async function Post({ params }: { params: { id: string } }) {
  const { id } = params;
  const movieId = getMovieById(id)
  const movieData = await fetchMovieData(movieId)
  return (
    <div className="h-fit">
      <header className="">
         <div className="w-full h-[400px] overflow-hidden">
            <Image
               src={`https://image.tmdb.org/t/p/original/${movieData.backdrop_path}`}
               width={2000}
               height={980}
               alt="Hero"
               className="object-cover w-full h-auto"
            />
         </div>
         <div className="h-[460px] w-full top-0 absolute z-20 bg-gradient-to-t from-white dark:from-zinc-900 to-transparent"></div>
         <h1 className="font-black z-30 absolute top-44 left-[100px] flex flex-col space-y-4 max-w-[450px] text-6xl">
          {movieData.title}   
         </h1>
      </header>
    </div>
  );
}