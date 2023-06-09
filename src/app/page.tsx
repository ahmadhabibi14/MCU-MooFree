import { HomeHeading } from "@/components/home/heading";
import Section01 from "@/components/home/section-01";

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
      <Section01 />
    </div>
  )
}
