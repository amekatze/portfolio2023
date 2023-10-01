import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "../contexts/ThemeContext";

export default function Nav() {
  const [isMobile, setIsMobile] = useState(false);
  const [hamburger, setHamburger] = useState(false);

  const { currentTheme, toggleTheme } = useTheme();

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

  useEffect(() => {
    applyTheme();
  }, [currentTheme]);

  const applyTheme = () => {
    document.documentElement.classList.remove("theme-light", "theme-dark");
    document.documentElement.classList.add(`theme-${currentTheme}`);
  };

  return (
    <div>
      <div className="nav fixed top-0 w-full md:px-8 px-4 flex justify-between items-center font-semibold">
        {!isMobile && (
          <span className="logo flex justify-center items-center">
            <Link href={`/`}>MK</Link>
          </span>
        )}

        {isMobile ? (
          <div>
            {hamburger ? (
              <div className=" cursor-pointer" onClick={handleHamburger}>
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
            ) : (
              <div
                className="space-y-2 cursor-pointer"
                onClick={handleHamburger}
              >
                <span className="block w-8 h-0.5 hamburger-icon"></span>
                <span className="block w-8 h-0.5 hamburger-icon "></span>
                <span className="block w-5 h-0.5 hamburger-icon"></span>
              </div>
            )}
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

        <div
          className={`hamburger mt-[70px] right-0 w-full transition-all ${
            hamburger ? "open" : ""
          }`}
        >
          <ul className="flex flex-col justify-between text-right px-10 pt-14 gap-6 text-2xl uppercase">
            <li className="py-4 px-2">
              <a href="">Home</a>
            </li>
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

        <div onClick={toggleTheme} className="cursor-pointer">
          {currentTheme === "light" ? (
            <Image
              src="/icons/moon.svg"
              width={30}
              height={30}
              alt="Dark Mode"
              className="icon"
            />
          ) : (
            <Image
              src="/icons/sun.svg"
              width={30}
              height={30}
              alt="Light Mode"
              className="icon"
            />
          )}
        </div>
      </div>
    </div>
  );
}
