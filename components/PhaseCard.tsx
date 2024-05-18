type PhaseCardProps = {
  title: string;
  children: React.ReactNode;
};

export default function PhaseCard({ props }: { props: PhaseCardProps }) {
  return (
    <div className="w-[298px] h-[203px] lg:w-[350px] lg:h-[410px] border-[4px] border-black rounded-[32px] bg-white">
      <div className="relative right-3 bottom-3 w-[298px] h-[203px] lg:w-[350px] lg:h-[410px] border-[4px] border-black rounded-[32px] bg-white flex flex-col justify-start items-center">
        <div className="font-chakraPetch font-bold text-black text-[20px] lg:text-[40px] mt-[12px] lg:mt-10">
          {props.title}
        </div>
        <div className="font-chakraPetch font-medium text-black text-[16px] lg:text-[24px] mt-[2px] px-[8px] lg:mt-6 lg:px-6">
          {props.children}
        </div>
      </div>
    </div>
  );
}
