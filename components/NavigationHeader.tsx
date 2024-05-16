"use client";

const NavigationHeader = () => {
  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className='w-full p-10'>
      <div className='border-[3px] border-black rounded-full h-[85px] bg-white'>
        <div className='border-[3px] border-black rounded-full h-full bg-white relative right-[1px] bottom-[3px] flex justify-between items-center font-chakraPetch font-bold text-[24px] leading-[31.2px]'>
          <div className='flex justify-start items-center gap-24 ml-16'>
            <div className='flex justify-center items-center'>
              <img src='/sackbird.svg' alt='sack bird' width={55} height={55} />
            </div>
            <div
              className='cursor-pointer'
              onClick={() => handleScrollToSection("home")}
            >
              Home
            </div>
            <div
              className='cursor-pointer'
              onClick={() => handleScrollToSection("story")}
            >
              STORY
            </div>
            <div
              className='cursor-pointer'
              onClick={() => handleScrollToSection("sacknomics")}
            >
              SACKNOMICS
            </div>
          </div>
          <div className='flex justify-start items-center gap-16 flex-row-reverse mr-16'>
            <div className='w-9 h-9 bg-[#D9D9D9] rounded-full cursor-pointer'></div>
            <div className='w-9 h-9 bg-[#D9D9D9] rounded-full cursor-pointer'></div>
            <div className='cursor-pointer'>Buy Sack</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationHeader;
