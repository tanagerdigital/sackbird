import NavigationHeader from "@/components/NavigationHeader";
import RoadMap from "@/components/RoadMap";
import SackStory from "@/components/SackStory";
import Sacknomics from "@/components/Sacknomics";
import Welcome from "@/components/Welcome";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between bg-white'>
      <header className='w-full flex justify-between items-center'>
        <NavigationHeader />
      </header>

      <Welcome />

      <SackStory />

      <Sacknomics />

      <RoadMap />
      <footer className='flex justify-center items-center'>
        <img src='/bird8.svg' alt='sack bird' width={141} height={123} />
      </footer>
    </main>
  );
}
