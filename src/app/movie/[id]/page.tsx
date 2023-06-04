import { Metadata } from "next";
import { fetchMovieData } from "@/api/fetch_movie_data";
import { getMovieById, getMoviePoster, movieObjectMap } from "@/data/movies/movie_page_details";
import Image from "next/image"
import MovieDetailsData from "@/components/movies/movie_details_data"

let movieId: string, imgPoster: string, movieData: any, id: string;

type Props = {
   params: {id: string};
}

export async function generateMetadata(
   { params }: Props,
): Promise<Metadata> {
   // read route params
   id = params.id;
   movieId = getMovieById(id);
   imgPoster = getMoviePoster(id);
   movieData = await fetchMovieData(movieId);

   return {
      title: movieData.title,
      description: movieData.overview,
      openGraph: {
        title: movieData.title,
        images: movieData.backdrop_path,
      },
    }
}

export function generateStaticParams() {
  return Object.values(movieObjectMap).map((obj) => obj.id);
}

export default async function Movie() {
   // const { id } = params;
   // const movieId = getMovieById(id)
   // const imgPoster = getMoviePoster(id)
   // const movieData = await fetchMovieData(movieId)

   const date: Date = new Date(movieData.release_date)
   const releaseDate: string = date.toLocaleDateString("en-US", {
      month: "long",
      day: "2-digit",
      year: "numeric",
   })
   return (
    <div className="h-fit">
      <header className="text-zinc-200 w-full">
         <div className="w-full h-[400px] overflow-hidden">
            <Image
               src={`https://image.tmdb.org/t/p/original/${movieData.backdrop_path}`}
               width={2000}
               height={980}
               alt="Hero"
               className="object-cover w-full h-auto"
            />
         </div>
         <div className="bg-red-800/90 h-[460px] w-full top-0 absolute z-10"></div>
         {/* Properties*/}
         <div className="z-30 absolute top-[64px] w-full h-fit px-28 py-16 flex flex-row gap-12">
            <div className="w-44">
               <Image
                  src={`/img/MoviesImage/${imgPoster}`}
                  width={382}
                  height={566}
                  alt="Hero"
                  className="object-cover w-full h-auto shadow-lg border border-zinc-600 rounded-lg"
            />
            </div>
            <div className="grow flex flex-col justify-center space-y-6 py-3">
               <h1 className="font-extrabold text-4xl">{movieData.title}</h1>
               <div className="w-fit py-1 px-4 text-sm border border-zinc-200 rounded-full flex flex-row space-x-1">
                  {movieData.genres.map((item: any, idx: number) => (
                     <p key={idx} className={`${idx < movieData.length -2 ? "ngab" : "tes"}`} >
                        { (idx ? "| " : "") + item.name }
                     </p>
                  ))}
               </div>
               <ul className="flex flex-col space-y-3">
                  {/* tagline */}
                  <li className="flex flex-row items-center space-x-3">
                     <svg viewBox="0 0 24 24" className="fill-current w-[22px]">
                        <path opacity="0.4" d="M16.1898 2H7.81977C4.17977 2 2.00977 4.17 2.00977 7.81V16.18C2.00977 19.82 4.17977 21.99 7.81977 21.99H16.1898C19.8298 21.99 21.9998 19.82 21.9998 16.18V7.81C21.9998 4.17 19.8298 2 16.1898 2Z"/>
                        <path d="M15.8109 7.21997H14.3209C13.2309 7.21997 12.3809 8.06997 12.3809 9.15997V10.65C12.3809 11.74 13.2309 12.59 14.3209 12.59H16.2309C16.1509 14.4 15.7309 14.67 14.5209 15.38C14.1609 15.59 14.0509 16.05 14.2609 16.41C14.4009 16.65 14.6509 16.78 14.9109 16.78C15.0409 16.78 15.1709 16.75 15.2909 16.68C17.0809 15.62 17.7509 14.93 17.7509 11.85V9.17999C17.7509 8.08999 16.8809 7.21997 15.8109 7.21997Z"/>
                        <path d="M9.68 7.21997H8.19C7.1 7.21997 6.25 8.06997 6.25 9.15997V10.65C6.25 11.74 7.1 12.59 8.19 12.59H10.1C10.02 14.4 9.6 14.67 8.39 15.38C8.03 15.59 7.92 16.05 8.13 16.41C8.27 16.65 8.52 16.78 8.78 16.78C8.91 16.78 9.04 16.75 9.16 16.68C10.95 15.62 11.62 14.93 11.62 11.85V9.17999C11.61 8.08999 10.74 7.21997 9.68 7.21997Z"/>
                     </svg>
                     <span>{movieData.tagline}</span>
                  </li>
                  {/* Release Date */}
                  <li className="flex flex-row items-center space-x-3">
                     <svg viewBox="0 0 24 24" className="fill-current w-[22px]">
                        <path d="M16.7502 3.56V2C16.7502 1.59 16.4102 1.25 16.0002 1.25C15.5902 1.25 15.2502 1.59 15.2502 2V3.5H8.75023V2C8.75023 1.59 8.41023 1.25 8.00023 1.25C7.59023 1.25 7.25023 1.59 7.25023 2V3.56C4.55023 3.81 3.24023 5.42 3.04023 7.81C3.02023 8.1 3.26023 8.34 3.54023 8.34H20.4602C20.7502 8.34 20.9902 8.09 20.9602 7.81C20.7602 5.42 19.4502 3.81 16.7502 3.56Z"/>
                        <path opacity="0.4" d="M20 9.84009C20.55 9.84009 21 10.2901 21 10.8401V17.0001C21 20.0001 19.5 22.0001 16 22.0001H8C4.5 22.0001 3 20.0001 3 17.0001V10.8401C3 10.2901 3.45 9.84009 4 9.84009H20Z"/>
                        <path d="M8.5 14.9999C8.24 14.9999 7.98 14.8899 7.79 14.7099C7.61 14.5199 7.5 14.2599 7.5 13.9999C7.5 13.7399 7.61 13.4799 7.79 13.2899C8.07 13.0099 8.51 12.9199 8.88 13.0799C9.01 13.1299 9.12 13.1999 9.21 13.2899C9.39 13.4799 9.5 13.7399 9.5 13.9999C9.5 14.2599 9.39 14.5199 9.21 14.7099C9.02 14.8899 8.76 14.9999 8.5 14.9999Z"/>
                        <path d="M12 14.9999C11.74 14.9999 11.48 14.8899 11.29 14.7099C11.11 14.5199 11 14.2599 11 13.9999C11 13.7399 11.11 13.4799 11.29 13.2899C11.38 13.1999 11.49 13.1299 11.62 13.0799C11.99 12.9199 12.43 13.0099 12.71 13.2899C12.89 13.4799 13 13.7399 13 13.9999C13 14.2599 12.89 14.5199 12.71 14.7099C12.66 14.7499 12.61 14.7899 12.56 14.8299C12.5 14.8699 12.44 14.8999 12.38 14.9199C12.32 14.9499 12.26 14.9699 12.2 14.9799C12.13 14.9899 12.07 14.9999 12 14.9999Z"/>
                        <path d="M15.5 15C15.24 15 14.98 14.89 14.79 14.71C14.61 14.52 14.5 14.26 14.5 14C14.5 13.74 14.61 13.48 14.79 13.29C14.89 13.2 14.99 13.13 15.12 13.08C15.3 13 15.5 12.98 15.7 13.02C15.76 13.03 15.82 13.05 15.88 13.08C15.94 13.1 16 13.13 16.06 13.17C16.11 13.21 16.16 13.25 16.21 13.29C16.39 13.48 16.5 13.74 16.5 14C16.5 14.26 16.39 14.52 16.21 14.71C16.16 14.75 16.11 14.79 16.06 14.83C16 14.87 15.94 14.9 15.88 14.92C15.82 14.95 15.76 14.97 15.7 14.98C15.63 14.99 15.56 15 15.5 15Z"/>
                        <path d="M8.5 18.5C8.37 18.5 8.24 18.47 8.12 18.42C7.99 18.37 7.89 18.3 7.79 18.21C7.61 18.02 7.5 17.76 7.5 17.5C7.5 17.24 7.61 16.98 7.79 16.79C7.89 16.7 7.99 16.63 8.12 16.58C8.3 16.5 8.5 16.48 8.7 16.52C8.76 16.53 8.82 16.55 8.88 16.58C8.94 16.6 9 16.63 9.06 16.67C9.11 16.71 9.16 16.75 9.21 16.79C9.39 16.98 9.5 17.24 9.5 17.5C9.5 17.76 9.39 18.02 9.21 18.21C9.16 18.25 9.11 18.3 9.06 18.33C9 18.37 8.94 18.4 8.88 18.42C8.82 18.45 8.76 18.47 8.7 18.48C8.63 18.49 8.57 18.5 8.5 18.5Z"/>
                        <path d="M12 18.4999C11.74 18.4999 11.48 18.3899 11.29 18.2099C11.11 18.0199 11 17.7599 11 17.4999C11 17.2399 11.11 16.98 11.29 16.79C11.66 16.42 12.34 16.42 12.71 16.79C12.89 16.98 13 17.2399 13 17.4999C13 17.7599 12.89 18.0199 12.71 18.2099C12.52 18.3899 12.26 18.4999 12 18.4999Z"/>
                        <path d="M15.5 18.4999C15.24 18.4999 14.98 18.3899 14.79 18.2099C14.61 18.0199 14.5 17.7599 14.5 17.4999C14.5 17.2399 14.61 16.98 14.79 16.79C15.16 16.42 15.84 16.42 16.21 16.79C16.39 16.98 16.5 17.2399 16.5 17.4999C16.5 17.7599 16.39 18.0199 16.21 18.2099C16.02 18.3899 15.76 18.4999 15.5 18.4999Z"/>
                     </svg>
                     <span>{releaseDate}</span>
                  </li>
               </ul>
            </div>
         </div>
      </header>

      <MovieDetailsData
         overview={movieData.overview}
         language={movieData.original_language}
         runtime={movieData.runtime}
         revenue={movieData.revenue}
         trailer={movieObjectMap[id]?.trailer}
      />
    </div>
  );
}