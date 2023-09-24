export default function Nav({}) {
  return (
    <div className="nav fixed top-0 w-full border-b-[1.5px] px-10 flex justify-between items-center font-semibold">
      <span className="py-6">
        <a href="">MALI</a>
      </span>
      <ul className="flex justify-between gap-8">
        <li className="py-4 px-2">
          <a href="">my projects</a>
        </li>
        <li className="py-4 px-2">
          <a href="">about me</a>
        </li>
        <li className="py-4 px-2">
          <a href="">info</a>
        </li>
      </ul>
    </div>
  );
}
