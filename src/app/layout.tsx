import "./globals.css"
import NavBar from "@/partials/navbar"
import Footer from "@/partials/footer"

export default function RootLayout({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <html lang="en">
         <head>
            <link rel="icon" href="/favicons/favicon.ico" type="image/x-icon" />
         </head>
         <body className="font-poppins text-zinc-800 dark:text-zinc-200">
            <NavBar />
            <main className="min-h-[90vh] dark:bg-zinc-900 dark:text-zinc-200 pt-24 px-14 pb-10">
               {children}
            </main>
            <Footer />
         </body>
      </html>
   )
}
