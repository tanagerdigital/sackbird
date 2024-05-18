import AnimatedSVG1 from "./AnimatedBird1";
import AnimatedSVG2 from "./AnimatedBird2";
import AnimatedSVG from "./AnimatedBird7";

const Sacknomics = () => {
  return (
    <div id="sacknomics" className="flex justify-between w-full lg:mt-[-100px]">
      <div className="flex flex-col lg:flex-col-reverse pt-[280px] lg:pb-40">
        <AnimatedSVG1 />
      </div>
      <div className="flex flex-col justify-start items-center w-full">
        <div className="font-chakraPetch font-bold text-black text-[30px] lg:text-[60px]">
          <div className="w-[260px] h-[260px] lg:w-[600px] lg:h-[600px] bg-sacknomics bg-cover flex justify-center items-center">
            SACKNOMICS
          </div>
        </div>
        <div className="flex justify-center items-center mt-[-100px] lg:mt-[-226px]">
          <AnimatedSVG />
        </div>
        <div className="grid grid-flow-row grid-rows-4 grid-cols-1 lg:grid-rows-2 lg:grid-cols-2 gap-[20px] lg:gap-[70px] mt-[76px]">
          <div className="flex flex-col gap-[4px] lg:gap-[15px] font-chakraPetch text-black">
            <div className="font-normal text-[24px]">Total Supply</div>
            <div className="font-bold text-[40px] lg:text-[60px]">1000M</div>
          </div>
          <div className="flex flex-col gap-[4px] lg:gap-[15px] font-chakraPetch text-black">
            <div className="font-normal text-[24px]">100% Fair launch</div>
            <div className="font-bold text-[40px] lg:text-[60px]">
              0% PRESALE
            </div>
          </div>
          <div className="flex flex-col gap-[4px] lg:gap-[15px] font-chakraPetch text-black">
            <div className="font-normal text-[24px]">No Taxes</div>
            <div className="font-bold text-[40px] lg:text-[60px]">
              No Bullshit
            </div>
          </div>
          <div className="flex flex-col gap-[4px] lg:gap-[15px] font-chakraPetch text-black">
            <div className="font-normal text-[24px]">OWNERSHIP</div>
            <div className="font-bold text-[40px] lg:text-[60px]">REVOKED</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col pt-24 lg:pt-64">
        <AnimatedSVG2 />
      </div>
    </div>
  );
};

export default Sacknomics;
