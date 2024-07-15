"use client";
import BirdsTransition from "./BirdsTransition";

const Welcome = () => {
  return (
    <div className='w-full p-[8px] lg:p-[76px] flex flex-col-reverse lg:flex-row justify-start items-center lg:justify-between lg:items-start'>
      <div id='home' className='flex flex-col whitespace-pre-wrap lg:w-[600px]'>
        <div className='font-chakraPetch font-bold text-[33px] lg:text-[60px] text-black leading-[43px] lg:leading-[78px]'>
          {"Welcome to \nSackbird Sanctuary"}
        </div>
        <div className='font-chakraPetch font-normal text-[16px] lg:text-[24px] text-black leading-[20px] lg:leading-[32px] mt-[8px] lg:mt-[30px]'>
          {
            "Sackbird is the ultimate champion for all the underdogs in the crypto market—every small investor and project out there! Its stable triangular shape symbolizes the solid foundation and firm beliefs needed in crypto investing, guiding investors through market storms to success and fortune."
          }
        </div>
        <div
          className='relative mt-8 w-fit px-20 lg:px-40 h-[48px] font-chakraPetch font-bold text-[16px] lg:text-[20px] text-center bg-[#FFC700] rounded-full border-solid border-[2px] border-black'
          onClick={() => {
            window.location.href =
              "https://t.me/SackBirdBless_bot/Pray_to_SACKBIRD";
          }}
        >
          <div className='absolute left-0 top-[-1px] w-full h-full z-1 bg-[#FFC700] rounded-full border-solid border-[2px] border-black flex justify-center items-center'>
            Play Game
          </div>
        </div>
      </div>
      <div className='mb-[25px] lg:mt-[-120px]'>
        <div>
          <BirdsTransition />
        </div>
        <div className='flex'>
          <div className='w-[51px] h-[23px] lg:w-[196px] lg:h-[88px] bg-hand lg:bg-hand-lg bg-contain bg-no-repeat' />
          Sack bird
        </div>
      </div>
    </div>
  );
};

export default Welcome;
