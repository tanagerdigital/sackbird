import Footer from "@/components/Footer";
import NavigationHeader from "@/components/NavigationHeader";
import RoadMap from "@/components/RoadMap";
import SackStory from "@/components/SackStory";
import Sacknomics from "@/components/Sacknomics";
import Welcome from "@/components/Welcome";

export default function Home() {
  return (
    <main className="flex w-screen min-h-screen flex-col items-center justify-between bg-white">
      <header
        id="mainHeader"
        className="w-full flex justify-between items-center"
      >
        <NavigationHeader />
      </header>

      <Welcome />

      <SackStory />
      <div className="lg:hidden  font-chakraPetch font-normal text-[20px] text-black leading-[26px] mt-[30px] flex flex-col gap-5 px-2">
        <p>
          {
            "The Legend of Sack Bird: A Omen of Prosperity In the fast-paced world of cryptocurrencies, traders seek any edge. Enter Sack Bird, a symbol of luck and wealth."
          }
        </p>
        <p>
          {
            "With its vibrant plumage forming a perfect triangle, Sack Bird's sudden appearances during market shifts have made it legendary."
          }
        </p>
        <p>
          {
            "After a trader jokingly attributed their success to Sack Bird, others claimed luck after seeing it, solidifying its status."
          }
        </p>
        <p>
          {
            "A prominent crypto influencer claimed Sack Bird appeared, coinciding with a doubling of his investment."
          }
        </p>
        <p>
          {
            "Though its mystical properties remain unconfirmed, Sack Bird's tale is a cherished reminder of faith and wealth in crypto culture."
          }
        </p>
      </div>

      <Sacknomics />

      <RoadMap />

      <Footer />
    </main>
  );
}
