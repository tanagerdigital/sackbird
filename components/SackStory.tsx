import AnimatedSVG from "./AnimatedBird3";

const SackStory = () => {
  return (
    <div
      id="story"
      className="w-full flex justify-center lg:justify-start items-center mt-[60px] lg:mt-0"
    >
      <div className="bg-story-bg bg-cover bg-no-repeat w-[223px] h-[174px] lg:w-[993px] lg:h-[774px]">
        <div className="flex justify-center items-center lg:justify-start lg:items-start lg:flex-col whitespace-pre-wrap lg:px-32 lg:pt-32 lg:pb-48 relative right-1 bottom-[2px] lg:bottom-3 bg-story-bg bg-cover bg-no-repeat w-[223px] h-[174px] lg:w-[993px] lg:h-[774px]">
          <div className="font-chakraPetch font-bold text-[30px] lg:text-[60px] text-black leading-[39px] lg:leading-[78px]">
            {"Sack Story"}
          </div>
          <div className="hidden  font-chakraPetch font-normal text-[20px] text-black leading-[26px] mt-[30px] lg:flex flex-col gap-5">
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
      <div className="w-1/3 flex justify-center relative">
        <AnimatedSVG />
      </div>
    </div>
  );
};

export default SackStory;
