import HappeningNow from "@/app/components/HappeningNow";
import Hero from "@/app/components/Hero";
import Trending from "@/app/components/Trending";

export default function Home() {
  return (
    <>
      <Hero />
      <div className='max-w-7xl mx-auto px-4 space-y-6'>
        <Trending />
        <HappeningNow />
      </div>
    </>
  );
}
