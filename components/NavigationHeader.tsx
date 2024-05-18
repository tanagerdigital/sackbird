"use client";

const NavigationHeader = () => {
  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full p-10">
      <div className="border-[3px] border-black rounded-full h-[85px] bg-white">
        <div className="border-[3px] border-black rounded-full h-full bg-white relative right-[5px] bottom-[3px] flex justify-between items-center font-chakraPetch font-bold text-[24px] leading-[31.2px]">
          <div className="flex justify-start items-center gap-10 ml-16">
            <div className="flex justify-center items-center">
              <img src="/bird5.svg" alt="sack bird" width={55} height={55} />
            </div>
            <div
              className="cursor-pointer"
              onClick={() => handleScrollToSection("home")}
            >
              Home
            </div>
            <div
              className="cursor-pointer"
              onClick={() => handleScrollToSection("story")}
            >
              STORY
            </div>
            <div
              className="cursor-pointer"
              onClick={() => handleScrollToSection("sacknomics")}
            >
              SACKNOMICS
            </div>
            <div
              className="cursor-pointer"
              onClick={() => handleScrollToSection("roadmap")}
            >
              ROADMAP
            </div>
          </div>
          <div className="flex justify-start items-center flex-row-reverse mr-10">
            <div
              className="cursor-pointer"
              onClick={() =>
                (window.location.href = "https://twitter.com/BurnTheBird2001")
              }
            >
              <img src="/telegram.svg" alt="telegram" width={35} height={35} />
            </div>
            <div
              className="cursor-pointer mr-[26px]"
              onClick={() =>
                (window.location.href = "https://t.me/burnthebird")
              }
            >
              <img src="/twitter.svg" alt="telegram" width={35} height={35} />
            </div>
            <div className="cursor-pointer mr-10">Buy Sack</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationHeader;
