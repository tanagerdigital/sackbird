type PhaseCardProps = {
  title: string;
  children: React.ReactNode;
};

export default function PhaseCard({ props }: { props: PhaseCardProps }) {
  return <div>{props.children}</div>;
}
