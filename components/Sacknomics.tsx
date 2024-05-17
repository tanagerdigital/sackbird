import AnimatedSVG1 from "./AnimatedBird1";
import AnimatedSVG2 from "./AnimatedBird2";

const Sacknomics = () => {
  return (
    <div id="sacknomics" className="flex justify-between w-full mt-[-100px]">
      <div className="flex flex-col-reverse pb-40">
        <AnimatedSVG1 />
      </div>
      <div className="flex flex-col justify-start items-center w-full">
        <div className="font-chakraPetch font-bold text-black text-[60px]">
          <div className="w-[600px] h-[600px] bg-sacknomics bg-cover flex justify-center items-center">
            SACKNOMICS
          </div>
        </div>
        <div className="flex justify-center items-center mt-[-226px]">
          <img src="/bird7.svg" alt="sack bird" width={987} height={680} />
        </div>
        <div className="grid grid-flow-row grid-rows-2 grid-cols-2 gap-[70px] mt-[76px]">
          <div className="flex flex-col gap-[15px] font-chakraPetch text-black">
            <div className="font-normal text-[24px]">Total Supply</div>
            <div className="font-bold text-[60px]">1000M</div>
          </div>
          <div className="flex flex-col gap-[15px] font-chakraPetch text-black">
            <div className="font-normal text-[24px]">100% Fair launch</div>
            <div className="font-bold text-[60px]">0% PRESALE</div>
          </div>
          <div className="flex flex-col gap-[15px] font-chakraPetch text-black">
            <div className="font-normal text-[24px]">No Taxes</div>
            <div className="font-bold text-[60px]">No Bullshit</div>
          </div>
          <div className="flex flex-col gap-[15px] font-chakraPetch text-black">
            <div className="font-normal text-[24px]">OWNERSHIP</div>
            <div className="font-bold text-[60px]">REVOKED</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col pt-64">
        <AnimatedSVG2 />
      </div>
    </div>
  );
};

export default Sacknomics;
