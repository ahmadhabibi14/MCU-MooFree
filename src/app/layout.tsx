import "./globals.css"
import NavBar from "@/partials/navbar"
import Footer from "@/partials/footer"
import Loading from "./loading";
import { Metadata } from "next";
import { Suspense } from "react";
import ErrorBoundary from "@/components/error/error-boundary";
import Error from "./error";

const currentTime: string = new Date().toISOString();

export const metadata: Metadata = {
   description: "Your Marvel movies",
   generator: "Next.js",
   applicationName: "MCU - MovFree",
   referrer: "origin-when-cross-origin",
   keywords: ["Next.js", "React", "Marvel", "Marvel Cinematic Universe"],
   authors: [{ name: "Ahmad Habibi", url: "https://habibi2004.pages.dev" }],
   creator: "Ahmad Habibi",
   publisher: "Ahmad Habibi",
   formatDetection: {
     email: false,
     address: false,
     telephone: false,
   },
   openGraph: {
      url: "/",
      publishedTime: currentTime,
   },
   icons: {
      icon: "/favicons/favicon.ico",
   },
   themeColor: [
      { media: '(prefers-color-scheme: light)', color: 'cyan' },
      { media: '(prefers-color-scheme: dark)', color: 'black' },
   ],
 };

export default function RootLayout({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <html lang="en">
         <body className="font-poppins text-zinc-800 dark:text-zinc-200">
            <NavBar />
            <main className="min-h-[90vh] dark:bg-zinc-900 dark:text-zinc-200 pb-10 pt-[58px]">
               <Suspense fallback={<Loading />}>
                  <ErrorBoundary fallback={<Error />}>
                     {children}
                  </ErrorBoundary>
               </Suspense>
            </main>
            <Footer />
         </body>
      </html>
   )
}
