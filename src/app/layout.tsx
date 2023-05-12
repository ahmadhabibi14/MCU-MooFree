import './globals.css'
import NavBar from '@/partials/navbar'
import Footer from '@/partials/footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
