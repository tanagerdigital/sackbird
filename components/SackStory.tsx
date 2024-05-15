import AnimatedSVG from "./AnimatedBird3";

const SackStory = () => {
  return (
    <div className="w-full flex items-center">
      <div className="bg-story-bg bg-contain bg-no-repeat w-2/3">
        <div className="flex flex-col whitespace-pre-wrap pl-32 pr-52 pt-28 pb-28 relative right-1 bottom-3 bg-story-bg bg-contain bg-no-repeat">
          <div className="font-chakraPetch font-bold text-[60px] leading-[78px]">
            {"Sack Story"}
          </div>
          <div className="font-chakraPetch font-normal text-[20px] leading-[26px] mt-[30px] flex flex-col gap-5">
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
        </div>
      </div>
      <div className="w-1/3">
        <AnimatedSVG />
      </div>
    </div>
  );
};

export default SackStory;
