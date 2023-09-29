interface NavProps {
  fraunces: any;
}

export default function Header({ fraunces }: NavProps) {
  return (
    <div className="flex flex-col gap-14 md:my-60 my-60 md:px-24 px-6 h-scren header ">
      <div className={`${fraunces.className} md:text-8xl text-6xl uppercase`}>
        Hi, I'm Mali Kleinewegen.
        <br />
        I'm a Full-Stack Developer.
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
