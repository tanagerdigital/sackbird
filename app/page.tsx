import AnimatedBird1 from "@/components/AnimatedBird1";
import AnimatedBird2 from "@/components/AnimatedBird2";
import NavigationHeader from "@/components/NavigationHeader";
import SackStory from "@/components/SackStory";
import Sacknomics from "@/components/Sacknomics";
import Welcome from "@/components/Welcome";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white">
      <header className="w-full flex justify-between items-center">
        <NavigationHeader />
      </header>

      <Welcome />

      <SackStory />

      <Sacknomics />
    </main>
  );
}
