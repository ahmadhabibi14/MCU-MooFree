import Link from "next/link"

export default function NavBar() {
   return (
      <nav className="flex flex-row justify-center items-center py-2 px-auto w-screen">
         <Link href="/" className="py-2 px-4 bg-blue-500 text-slate-50 rounded-xl">Home</Link>
         <Link href="/about" className="py-2 px-4 bg-blue-500 text-slate-50 rounded-xl">About</Link>
      </nav>
   )
}