import AnimatedSVG1 from "./AnimatedBird1";
import AnimatedSVG2 from "./AnimatedBird2";

const Sacknomics = () => {
  return (
    <div className="flex justify-between w-screen">
      <div className="flex flex-col-reverse">
        <AnimatedSVG1 />
      </div>
      <div className="flex flex-col h-[600px]">
        <div>SACKNOMICS</div>
      </div>
      <div className="flex flex-col">
        <AnimatedSVG2 />
      </div>
    </div>
  );
};

export default Sacknomics;
