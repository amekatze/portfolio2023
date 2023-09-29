import { useState, useEffect } from "react";

export default function Nav({}) {
  const [isMobile, setIsMobile] = useState(false);
  const [hamburger, setHamburger] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleHamburger = () => {
    setHamburger(!hamburger);
  };

  return (
    <div>
      <div className="nav fixed top-0 w-full border-b-[1px] px-10 flex justify-between items-center font-semibold">
        <span className="py-6">
          <a href="">MALI KLEINWEGEN</a>
        </span>

        {isMobile ? (
          <div>
            <div className="space-y-2 cursor-pointer" onClick={handleHamburger}>
              <span className="block w-8 h-0.5 bg-gray-600"></span>
              <span className="block w-8 h-0.5 bg-gray-600"></span>
              <span className="block w-5 h-0.5 bg-gray-600"></span>
            </div>
          </div>
        ) : (
          <div>
            <ul className="flex justify-between gap-8 uppercase">
              <li className="py-4 px-2">
                <a href="">My Projects</a>
              </li>
              <li className="py-4 px-2">
                <a href="">About Me</a>
              </li>
              <li className="py-4 px-2">
                <a href="">Info</a>
              </li>
            </ul>
          </div>
        )}

        {hamburger && (
          <div className="hamburger absolute top-0 right-0 w-full h-fit">
            <div
              className="absolute right-0 m-6 cursor-pointer"
              onClick={handleHamburger}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <ul className="flex flex-col justify-between gap-6 mt-20 mb-10 text-2xl uppercase">
              <li className="py-4 px-2">
                <a href="">My Projects</a>
              </li>
              <li className="py-4 px-2">
                <a href="">About Me</a>
              </li>
              <li className="py-4 px-2">
                <a href="">Info</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
