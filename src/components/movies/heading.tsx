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
         
            <h1 className="absolute top-44 left-[100px] flex flex-col space-y-4 max-w-[450px] text-2xl font-medium">
               Journey into the cosmic depths of the mighty Marvel Cinematic Universe! Pick up your favorite Movies, get more HD experience.
            </h1>
      </header>
   )
}