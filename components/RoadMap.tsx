import PhaseCard from "./PhaseCard";

const RoadMap = () => {
  return (
    <div
      id="roadmap"
      className="flex flex-col justify-start items-center lg:mt-[-100px] lg:pb-[52px]"
    >
      <div className="font-chakraPetch font-bold text-black text-[30px] lg:text-[60px] flex justify-center items-center">
        <div className="w-[300px] h-[300px] lg:w-[600px] lg:h-[600px] bg-roadmap bg-cover flex justify-center items-center">
          ROADMAP
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-[20px] lg:gap-[50px] mt-[-100px] lg:mt-[-200px]">
        <PhaseCard
          props={{
            title: "PHASE 1",
            children: (
              <div>
                {
                  "A prominent crypto influencer claimed Sack Bird appeared, coinciding with a doubling of his investment."
                }
              </div>
            ),
          }}
        />
        <PhaseCard
          props={{
            title: "PHASE 2",
            children: (
              <div>
                {
                  "Sackbird becomes the ultimate champion for all the underdogs in the crypto market—every small investor and project out there!"
                }
              </div>
            ),
          }}
        />
        <PhaseCard
          props={{
            title: "PHASE 3",
            children: (
              <div>
                {
                  "Sackbird leads its community followers, soaring between different crypto communities, always on the lookout for new get-rich opportunities."
                }
              </div>
            ),
          }}
        />
      </div>
    </div>
  );
};

export default RoadMap;
