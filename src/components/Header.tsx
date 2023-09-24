interface NavProps {
  fraunces: any;
}

export default function Header({ fraunces }: NavProps) {
  return (
    <div className="flex flex-col gap-14 my-40">
      <div className="gradient"></div>

      <div className={`${fraunces.className} text-7xl uppercase`}>
        Hi, my name is Mali.
        <br />
        I'm a Full-Stack Developer <br />
        and UX/UI Designer.
      </div>
      <p className="text-2xl ml-10">
        I like to craft solid and scalable full-stack products with engaging and
        intuitive user experiences. Based in Tokyo, Japan.
      </p>
      <ul className="uppercase text-xl ml-10">
        <li>
          Check out my <b>work</b> →
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
