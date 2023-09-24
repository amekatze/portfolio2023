export default function Nav() {
  return (
    <div className="nav fixed top-0 w-full border-b-[1.5px] px-6 py-4 flex justify-between font-semibold">
      <span>
        <a href="">MALI KLEINEWEGEN</a>
      </span>
      <ul className="flex justify-between gap-8">
        <li>
          <a href="">my work</a>
        </li>
        <li>
          <a href="">about me</a>
        </li>
        <li>
          <a href="">info</a>
        </li>
      </ul>
    </div>
  );
}
