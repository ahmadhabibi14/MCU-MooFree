import Image from "next/image"

export function HomeHeading() {
   return(
      <header className="text-zinc-200">
         <Image
            src="/img/Background/hero.png"
            width={2915}
            height={865}
            alt="Hero"
            className="w-full h-auto"
         />
         <div className="absolute top-40 left-[100px] flex flex-col space-y-4 max-w-[450px]">
            <Image
               width={1936}
               height={444}
               src="/img/Logo/MovFree.svg"
               alt="MovFree"
               className="w-[300px] h-auto"
            />
            <h1 className="text-xl font-medium">Journey into the cosmic depths of the mighty Marvel Cinematic Universe!</h1>
         </div>
      </header>
   )
}