interface NavProps {
  fraunces: any;
}

export default function Header({ fraunces }: NavProps) {
  return (
    <div className="flex flex-col gap-14 md:my-60 my-40 md:px-36 px-6">
      <div className={`${fraunces.className} md:text-7xl text-5xl uppercase`}>
        Hi, my name is Mali.
        <br />
        I'm a Full-Stack Developer <br />
        and UX/UI Designer.
      </div>
      <p className="text-2xl ml-10">
        I like coding, data and art. Based in Tokyo, Japan.
      </p>
      <ul className="uppercase text-xl ml-10">
        <li>
          Check out my <b>projects</b> →
        </li>
        <li>
          Check out my <b>thoughts</b> →
        </li>
        <li>
          Check out my <b>art</b> →
        </li>
      </ul>
    </div>
  );
}
