interface AboutProps {
  fraunces: any;
}

export default function About({ fraunces }: AboutProps) {
  return (
    <div>
      <h1 className={`${fraunces.className} text-7xl uppercase`}>About</h1>
    </div>
  );
}
