import { fetchMovieData } from "@/api/fetch_movie_data";
import { getMovieById, movieObjectMap } from "@/data/movies/movie_page_details";

export function generateStaticParams() {
  return Object.values(movieObjectMap).map((obj) => obj.id);
}

export default async function Post({ params }: { params: { id: string } }) {
  const { id } = params;
  const movieId = getMovieById(id)
  const movieData = await fetchMovieData(movieId)
  // console.log(movieData)
  return (
    <div className="bg-gray-800 h-screen p-16 text-gray-100">
      <div className="text-center font-bold text-3xl">
        {movieData.title}
      </div>
      <div className="text-justify my-8 text-gray-200">
        fksnf
      </div>
      <div className="text-gray-400">
        osfwj9r09h
      </div>
    </div>
  );
}