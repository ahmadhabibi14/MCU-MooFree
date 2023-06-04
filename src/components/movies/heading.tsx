import Image from "next/image"

export function MoviesHeading() {
   return (
      <header className="font-semibold text-zinc-200">
         <Image
            src="/img/Background/movie-banner.png"
            width={2764}
            height={944}
            alt="Hero"
            className="w-full h-auto"
         />
         
            <h1 className="absolute top-44 left-[100px] flex flex-col space-y-4 max-w-[450px] text-lg font-medium">
               Immerse yourself in the cinematic brilliance of Marvel movies. From the awe-inspiring Avengers saga to the captivating Guardians of the Galaxy, we bring you in-depth coverage and analysis of your favorite films. Get behind-the-scenes insights, explore character profiles, and relive iconic moments that have left an indelible mark on pop culture.
            </h1>
      </header>
   )
}