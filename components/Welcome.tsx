const Welcome = () => {
  return (
    <div className="w-full p-[76px] flex justify-between items-start">
      <div id="home" className="flex flex-col whitespace-pre-wrap w-[600px]">
        <div className="font-chakraPetch font-bold text-[60px] leading-[78px]">
          {"Welcome to \nSackbird Sanctuary"}
        </div>
        <div className="font-chakraPetch font-normal text-[24px] leading-[32px] mt-[30px]">
          {
            "Sackbird is the ultimate champion for all the underdogs in the crypto market—every small investor and project out there! Its stable triangular shape symbolizes the solid foundation and firm beliefs needed in crypto investing, guiding investors through market storms to success and fortune."
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
