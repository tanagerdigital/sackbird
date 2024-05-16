const Welcome = () => {
  return (
    <div className="w-full p-[76px] flex justify-between items-start">
      <div id="home" className="flex flex-col whitespace-pre-wrap w-[600px]">
        <div className="font-chakraPetch font-bold text-[60px] leading-[78px]">
          {"Welcome to \nSackbird Sanctuary"}
        </div>
        <div className="font-chakraPetch font-normal text-[24px] leading-[32px] mt-[30px]">
          {
            "Sackbird is a representative of the new generation of crypto memes. Crypto users can interact with Sackbird daily to receive a lucky boost for their crypto investments that day."
          }
        </div>
      </div>
      <div className="">
        <img src="/bird4.svg" alt="sack bird" width={544} height={464} />
      </div>
    </div>
  );
};

export default Welcome;
