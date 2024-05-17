type PhaseCardProps = {
  title: string;
  children: React.ReactNode;
};

export default function PhaseCard({ props }: { props: PhaseCardProps }) {
  return (
    <div className='w-[350px] h-[600px] border-[4px] border-black rounded-[32px] bg-white'>
      <div className='relative right-3 bottom-3 w-[350px] h-[600px] border-[4px] border-black rounded-[32px] bg-white'>
        {props.children}
      </div>
    </div>
  );
}
