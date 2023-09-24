interface WorkProps {
  fraunces: any;
}

export default function Work({ fraunces }: WorkProps) {
  return (
    <div>
      <h1 className={`${fraunces.className} text-7xl uppercase`}>Work</h1>
    </div>
  );
}
