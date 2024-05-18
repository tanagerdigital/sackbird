type PhaseCardProps = {
  title: string;
  children: React.ReactNode;
};

export default function PhaseCard({ props }: { props: PhaseCardProps }) {
  return (
    <div className="w-[350px] h-[600px] border-[4px] border-black rounded-[32px] bg-white">
      <div className="relative right-3 bottom-3 w-[350px] h-[600px] border-[4px] border-black rounded-[32px] bg-white flex flex-col justify-start items-center">
        <div className="font-chakraPetch font-bold text-black text-[40px] mt-10">
          {props.title}
        </div>
        <div className="font-chakraPetch font-medium text-black text-[24px] mt-10 px-6">
          {props.children}
        </div>
      </div>
    </div>
  );
}
