"use client"
import Image from "next/image";

export default function Footer() {
   const year = new Date().getFullYear();
   return (
      <footer className="px-6 md:px-20 pt-6 bg-gray-900 w-full">
   <section className="flex flex-col md:flex-row justify-start md:space-x-20 mb-10 text-gray-300">
      <figure className="w-full md:basis-[30%] text-base flex flex-col space-y-3">
         <Image src="/img/Logo/Mdddd.svg" width={150} height={150} className="cursor-pointer w-[150px] h-auto grayscale hover:filter-none" title="Yome Logo" alt="Yome Logo" />
         <figcaption>
            Listen your favorite cool and fantastic audio, keep your mood with free music to listen and download only in <a href="/" className="italic text-sky-400">Yome</a>
         </figcaption>
      </figure>

      <div className="grow mt-4 grid grid-cols-2 md:grid-cols-3 gap-8">
         {/* <!-- ###2 --> */}
         <section className="flex flex-col space-y-2">
            <h6 className="font-bold text-sky-500 text-lg">Social Media</h6>
            <nav className="flex flex-col space-y-2 text-sm">
               <a className="hover:underline cursor-pointer max-w-fit">Facebook</a>
               <a className="hover:underline cursor-pointer max-w-fit">Instagram</a>
               <a className="hover:underline cursor-pointer max-w-fit">Twitter</a>
               <a className="hover:underline cursor-pointer max-w-fit">YouTube</a>
               <a className="hover:underline cursor-pointer max-w-fit">Telegram</a>
            </nav>
         </section>
         {/* <!-- ###1 --> */}
         <section className="flex flex-col space-y-2">
            <h6 className="font-bold text-sky-500 text-lg">Music & Streaming</h6>
            <nav className="flex flex-col space-y-2 text-sm">
               <a className="hover:underline cursor-pointer max-w-fit">Spotify</a>
               <a className="hover:underline cursor-pointer max-w-fit">YouTube Music</a>
               <a className="hover:underline cursor-pointer max-w-fit">Deezer</a>
               <a className="hover:underline cursor-pointer max-w-fit">Soundcloud</a>
               <a className="hover:underline cursor-pointer max-w-fit">Apple Music</a>
               <a className="hover:underline cursor-pointer max-w-fit">JOOX</a>
               <a className="hover:underline cursor-pointer max-w-fit">Google Play Music</a>
            </nav>
         </section>
         {/* <!-- ###3 --> */}
         <section className="flex flex-col space-y-2">
            <h6 className="font-bold text-sky-500 text-lg">Yome</h6>
            <nav className="flex flex-col space-y-2 text-sm">
               <a className="hover:underline cursor-pointer max-w-fit">About</a>
               <a className="hover:underline cursor-pointer max-w-fit">Terms & Privacy</a>
               <a className="hover:underline cursor-pointer max-w-fit">Donate</a>
               <a className="hover:underline cursor-pointer max-w-fit">Contact Us</a>
               <a className="hover:underline cursor-pointer max-w-fit">Partnership</a>
               <a className="hover:underline cursor-pointer max-w-fit">API & Developers</a>
            </nav>
         </section>
      </div>
   </section>
   <div className="flex flex-col justify-center items-center py-3 border-t border-gray-700">
      <div className="flex flex-row space-x-3 text-sm italic">
         <p>Copyright &copy; {year}</p><p>|</p><p><a href="/" className="text-green-400 hover:underline">Yome.Inc</a>, All right reserved. Powered by <a href="https://react.dev" target="_blank" className="text-sky-500 hover:underline">React JS</a></p>
      </div>
   </div>
</footer>
   )
}