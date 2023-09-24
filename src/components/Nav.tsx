interface NavProps {
  changeCursorColor: () => void;
}

export default function Nav({ changeCursorColor }) {
  return (
    <div className="nav fixed top-0 w-full border-b-[1.5px] px-6  flex justify-between font-semibold">
      <span className="py-6">
        <a href="">MALI KLEINEWEGEN</a>
      </span>
      <ul className="flex justify-between gap-8">
        <li
          className="py-6 px-2"
          onMouseEnter={() => changeCursorColor("hover")}
          onMouseLeave={() => changeCursorColor("default")}
        >
          <a href="">my work</a>
        </li>
        <li
          className="py-6 px-2"
          onMouseEnter={() => changeCursorColor("hover")}
          onMouseLeave={() => changeCursorColor("default")}
        >
          <a href="">about me</a>
        </li>
        <li
          className="py-6 px-2"
          onMouseEnter={() => changeCursorColor("hover")}
          onMouseLeave={() => changeCursorColor("default")}
        >
          <a href="">info</a>
        </li>
      </ul>
    </div>
  );
}
