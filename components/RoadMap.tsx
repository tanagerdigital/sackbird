import PhaseCard from "./PhaseCard";

const RoadMap = () => {
  return (
    <div
      id='roadmap'
      className='flex flex-col justify-start items-center w-full py-10'
    >
      <div className='font-chakraPetch font-bold text-black text-[60px]'>
        ROADMAP
      </div>

      <div className='flex justify-center items-center gap-8 mt-[24px]'>
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
