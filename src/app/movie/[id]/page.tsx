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
      <header className="text-zinc-200">
         <Image
            src={`https://image.tmdb.org/t/p/original/${movieData.backdrop_path}`}
            width={2000}
            height={980}
            alt="Hero"
            className="w-full h-auto"
         />
         
            <h1 className="absolute top-44 left-[100px] flex flex-col space-y-4 max-w-[450px] text-2xl font-medium">
              {movieData.title}   
            </h1>
      </header>
    </div>
  );
}