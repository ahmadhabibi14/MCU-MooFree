"use client"
import { social_media, others, company } from "@/data/footer/item_lists";

export default function Footer() {
   const year: number = new Date().getFullYear();
   return (
      <footer className="px-6 md:px-20 pt-12 dark:bg-zinc-950 bg-zinc-200 w-full">
         <section className="flex flex-col md:flex-row justify-start md:space-x-20 mb-10 dark:text-gray-300 text-zinc-700">
            <figure className="w-full md:basis-[30%] text-base flex flex-col space-y-3">
               <svg viewBox="0 0 246.5 55.23" className="cursor-pointer w-[150px] h-auto">
                  <path className="dark:fill-white fill-black" d="M518.28,486.45h117v-2.05h-117Z" transform="translate(-388.75 -484.39)"/>
                  <path className="dark:fill-white fill-black" d="M518.28,539.59h117v-2.05h-117Z" transform="translate(-388.75 -484.39)"/>
                  <path className="dark:fill-white fill-black" d="M534.52,519.17v5.89c0,5-2.48,7.51-7.51,7.51h-1.27c-5,0-7.39-2.48-7.39-7.39v-5.63h4.5v5.8c0,2.08,1,3.06,3.06,3.06h.92c2.08,0,3.06-1,3.06-3.06v-6.06a4.13,4.13,0,0,0-2-3.87l-5.66-4.1a8,8,0,0,1-3.87-7.51V499c0-5,2.48-7.51,7.51-7.51H527c5,0,7.39,2.48,7.39,7.39v3.46h-4.5v-3.64c0-2.08-1-3.06-3.06-3.06H526c-2.08,0-3.06,1-3.06,3.06v5.08a4.17,4.17,0,0,0,2.08,3.87l5.6,4c2.94,2.14,3.87,4,3.87,7.51" transform="translate(-388.75 -484.39)"/>
                  <path className="dark:fill-white fill-black" d="M541.61,532.22V496.08h-6.06V491.8h16.74v4.27h-6.06v36.14Z" transform="translate(-388.75 -484.39)"/>
                  <path className="dark:fill-white fill-black" d="M570.51,525.06c0,5-2.48,7.51-7.51,7.51h-1.44c-5,0-7.51-2.48-7.51-7.51V491.8h4.62v33.49c0,2.08,1,3.06,3.06,3.06h1.1c2.08,0,3.06-1,3.06-3.06V491.8h4.62Z" transform="translate(-388.75 -484.39)"/>
                  <path className="dark:fill-white fill-black" d="M578.07,528h2.77c3.12,0,4.56-1.56,4.56-4.68V500.69c0-3.12-1.44-4.68-4.56-4.68h-2.77Zm-4.62-36.2h7.62c6.06,0,8.95,2.89,8.95,8.95v22.52c0,6.06-2.89,8.95-8.95,8.95h-7.62Z" transform="translate(-388.75 -484.39)"/>
                  <path className="dark:fill-white fill-black" d="M597.42,532.22H592.8V491.8h4.62Z" transform="translate(-388.75 -484.39)"/>
                  <path className="dark:fill-white fill-black" d="M609.27,495.67h-1.39c-2.08,0-3.06,1-3.06,3.06v26.56c0,2.08,1,3.06,3.06,3.06h1.39c2.08,0,3.06-1,3.06-3.06V498.73c0-2.08-1-3.06-3.06-3.06m.17,36.89h-1.73c-5,0-7.51-2.48-7.51-7.51V499c0-5,2.48-7.51,7.51-7.51h1.73c5,0,7.51,2.48,7.51,7.51v26.1c0,5-2.48,7.51-7.51,7.51" transform="translate(-388.75 -484.39)"/>
                  <path className="dark:fill-white fill-black" d="M635.15,519.17v5.89c0,5-2.48,7.51-7.51,7.51h-1.27c-5,0-7.39-2.48-7.39-7.39v-5.63h4.5v5.8c0,2.08,1,3.06,3.06,3.06h.92c2.08,0,3.06-1,3.06-3.06v-6.06a4.13,4.13,0,0,0-2-3.87l-5.66-4.1a8,8,0,0,1-3.87-7.51V499c0-5,2.48-7.51,7.51-7.51h1.16c5,0,7.39,2.48,7.39,7.39v3.46h-4.51v-3.64c0-2.08-1-3.06-3.06-3.06h-.81c-2.08,0-3.06,1-3.06,3.06v5.08a4.17,4.17,0,0,0,2.08,3.87l5.6,4c2.94,2.14,3.87,4,3.87,7.51" transform="translate(-388.75 -484.39)"/>
                  <path fill="#e50b14" d="M388.75,539.61H511.36V484.39H388.75Z" transform="translate(-388.75 -484.39)" />
                  <path fill="#ffff" d="M492.66,499.16h-6.54v9.13h6.54v7.38h-6.54v9.27h6.54v7.27H478.88V495.58l-5.81,36.63-8.5,0s-4.34-25.94-4.34-26h0c.7,4.19-1.93,8.57-4.26,10.3l4.6,15.67H453.4l-3.51-13.38-1.69.25v13.12H434.36l-.85-6.22h-5.67l-.85,6.22H412.91V512.73l-3.27,19.48h-3.88l-3.32-19.48v19.48h-7.3V491.79h9.27l3.25,20.88L411,491.79h9.27V529l5.57-37.17h9.68l5.39,35.88,0-35.88h7.4a11.69,11.69,0,0,1,10.54,6.57l-.83-6.57h7.39l3.34,24.61,3.37-24.61h20.5Z" transform="translate(-388.75 -484.39)"/>
                  <path fill="#e50b14" d="M448.24,499h0v13a4,4,0,0,0,1.72-.41c1.7-.83,3.15-2.89,3.15-6.16,0-6.26-4.26-6.43-4.83-6.43" transform="translate(-388.75 -484.39)" />
                  <path fill="#e50b14" d="M428.7,519.56h4.08l-2.08-17.28Z" transform="translate(-388.75 -484.39)" />
                  <path fill="#ffff" d="M507.37,532.2H493.93V491.79h7.24v33.14h6.2Z" transform="translate(-388.75 -484.39)"/>
               </svg>
               <figcaption>
                  All about Marvel stuff you that can find, download, streaming, and get the latest info for free only in <a href="/" className="italic text-red-500 underline">MovFree</a>
               </figcaption>
            </figure>

            <div className="grow grid grid-cols-2 md:grid-cols-3 gap-8">
               <section className="flex flex-col space-y-2">
                  <h6 className="font-bold text-red-600 text-lg">Others</h6>
                  <nav className="flex flex-col space-y-2 text-sm">
                     {others.map((item, idx) => (
                        <a
                           key={idx}
                           href={item.link}
                           target={item.external ? "_blank" : undefined}
                           className="hover:underline cursor-pointer max-w-fit">
                           {item.label}
                        </a>
                     ))}
                  </nav>
               </section>
               <section className="flex flex-col space-y-2">
                  <h6 className="font-bold text-red-600 text-lg">Social Media</h6>
                  <nav className="flex flex-col space-y-2 text-sm">
                     {social_media.map((item, idx) => (
                        <a
                           key={idx}
                           href={item.link}
                           target={item.external ? "_blank" : undefined}
                           className="hover:underline cursor-pointer max-w-fit">
                           {item.label}
                        </a>
                     ))}
                  </nav>
               </section>
               <section className="flex flex-col space-y-2">
                  <h6 className="font-bold text-red-600 text-lg">Company</h6>
                  <nav className="flex flex-col space-y-2 text-sm">
                     {company.map((item, idx) => (
                        <a
                           key={idx}
                           href={item.link}
                           target={item.external ? "_blank" : undefined}
                           className="hover:underline cursor-pointer max-w-fit">
                           {item.label}
                        </a>
                     ))}
                  </nav>
               </section>
            </div>
         </section>
         <div className="flex flex-col justify-center items-center py-3 border-t border-gray-700">
            <div className="flex flex-row space-x-3 text-sm">
               <p className="italic">Copyright &copy; 2021 - {year}</p><p>|</p><p  className="italic"><a href="/" className="text-red-500 hover:underline">MovFree.Inc</a>, All right reserved. Powered by Vercel and Next.JS</p>
            </div>
         </div>
      </footer>
   )
}