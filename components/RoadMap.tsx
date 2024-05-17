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
            children: undefined,
          }}
        />
        <PhaseCard
          props={{
            title: "PHASE 2",
            children: undefined,
          }}
        />
        <PhaseCard
          props={{
            title: "PHASE 3",
            children: undefined,
          }}
        />
      </div>
    </div>
  );
};

export default RoadMap;
