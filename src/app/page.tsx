import { HomeHeading } from "@/components/home/heading";

export const metadata = {
  title: "MCU - MovFree",
  openGraph: {
    title: "MovFree",
    images: "/next.svg",
  },
}

export default function Home() {
  return (
    <div className="">
      <HomeHeading />
    </div>
  )
}
