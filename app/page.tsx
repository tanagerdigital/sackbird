import Footer from "@/components/Footer";
import NavigationHeader from "@/components/NavigationHeader";
import RoadMap from "@/components/RoadMap";
import SackStory from "@/components/SackStory";
import Sacknomics from "@/components/Sacknomics";
import Welcome from "@/components/Welcome";

export default function Home() {
  return (
    <main className="flex w-screen min-w-[1440px] min-h-screen flex-col items-center justify-between bg-white">
      <header
        id="mainHeader"
        className="w-full flex justify-between items-center"
      >
        <NavigationHeader />
      </header>

      <Welcome />

      <SackStory />

      <Sacknomics />

      <RoadMap />

      <Footer />
    </main>
  );
}
