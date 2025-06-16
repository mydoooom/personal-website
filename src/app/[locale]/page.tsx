import { FunnyContent } from "@/app/[locale]/_components/jokes/funny-content";
import { Hero } from "./_components/hero";

export default function Home() {
  return (
    <>
      <Hero />
      <FunnyContent />
    </>
  );
}
