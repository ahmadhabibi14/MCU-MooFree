import Image from 'next/image'

export const metadata = {
  title: 'MCU - MovFree',
  description: 'Your Marvel movies',
  openGraph: {
    title: 'MovFree',
    images: '/next.svg',
  },
}


export default function Home() {
  return (
    <div>
      Home
    </div>
  )
}
