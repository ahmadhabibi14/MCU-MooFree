import { fetchMovieData } from "@/api/fetch_movie_data";
import { getMovieById, getMoviePoster, movieObjectMap } from "@/data/movies/movie_page_details";
import Image from "next/image"
// import ColorThief from "color-thief-ts/node";
// import Sharp from "sharp";
// const { getPaletteFromURL } = require('color-thief-node');
const ColorThief = require('colorthief');

export function generateStaticParams() {
  return Object.values(movieObjectMap).map((obj) => obj.id);
}

// const fetchImageBuffer = async (url: string): Promise<Buffer> => {
//   const response = await fetch(url);
//   const buffer = await response.arrayBuffer();
//   return buffer;
// };

// const getImageDominantColor = async (url: string) => {
//    const colorThief = new ColorThief();
//    const image = await fetch(url).then(
//       (res) => res.arrayBuffer()
//    ).then(
//       (arrayBuffer) => Buffer.from(arrayBuffer)
//    );
//    console.log(image)

//    const color = colorThief.getColor(image);

//    return color;
// };

export default async function Post({ params }: { params: { id: string } }) {
  const { id } = params;
  const movieId = getMovieById(id)
  const imgPoster = getMoviePoster(id)
  const movieData = await fetchMovieData(movieId)

  // const dominantColor = await getImageDominantColor(`https://image.tmdb.org/t/p/original/${movieData.backdrop_path}`);
  // console.log(dominantColor)

  // const colorPallete = await getPaletteFromURL(`https://image.tmdb.org/t/p/original/${movieData.backdrop_path}`);
  // console.log(colorPallete)
  const img = `https://image.tmdb.org/t/p/original/${movieData.backdrop_path}`
  const colors = await ColorThief.getPalette(img, 5)
  console.log(colors)
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