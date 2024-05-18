"use client";

const NavigationHeader = () => {
  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full p-[5px] lg:p-10">
      <div className="border-[3px] border-black rounded-full h-[40px] lg:h-[85px] bg-white">
        <div className="border-[2px] lg:border-[3px] border-black rounded-full h-full bg-white relative right-[2px] bottom-[2px] lg:right-[5px] lg:bottom-[3px] flex justify-between items-center font-chakraPetch font-bold text-[24px] leading-[31.2px]">
          <div className="flex justify-start items-center gap-10 ml-[5px] lg:ml-16 text-black">
            <div className="flex justify-center items-center w-[26px] h-[26px] lg:w-[55px] lg:h-[55px]">
              <img src="/bird5.svg" alt="sack bird" width={55} height={55} />
            </div>
            <div
              className="cursor-pointe hidden lg:block"
              onClick={() => handleScrollToSection("home")}
            >
              Home
            </div>
            <div
              className="cursor-pointer hidden lg:block"
              onClick={() => handleScrollToSection("story")}
            >
              STORY
            </div>
            <div
              className="cursor-pointer hidden lg:block"
              onClick={() => handleScrollToSection("sacknomics")}
            >
              SACKNOMICS
            </div>
            <div
              className="cursor-pointer hidden lg:block"
              onClick={() => handleScrollToSection("roadmap")}
            >
              ROADMAP
            </div>
          </div>
          <div className="flex justify-start items-center flex-row-reverse mr-10">
            <div
              className="cursor-pointer w-[20px] h-[20px] lg:w-[35px] lg:h-[35px]"
              onClick={() =>
                (window.location.href = "https://t.me/burnthebird")
              }
            >
              <img src="/telegram.svg" alt="telegram" width={35} height={35} />
            </div>
            <div
              className="cursor-pointer mr-[26px] w-[20px] h-[20px] lg:w-[35px] lg:h-[35px]"
              onClick={() =>
                (window.location.href = "https://twitter.com/BurnTheBird2001")
              }
            >
              <img src="/twitter.svg" alt="telegram" width={35} height={35} />
            </div>
            <div className="cursor-pointer mr-10 text-[16px] text-black lg:text-[24px]">
              Buy Sack
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationHeader;
