"use client";

const Footer = () => {
  const handleScrollToTop = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="flex justify-center items-center mb-20">
      <img
        className=" cursor-pointer"
        src="/bird8.svg"
        alt="sack bird"
        width={141}
        height={123}
        onClick={() => handleScrollToTop("mainHeader")}
      />
    </footer>
  );
};

export default Footer;
