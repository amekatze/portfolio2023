import { Raleway, Fraunces } from "next/font/google";
import React, { useEffect } from "react";

import Nav from "@/components/Nav";
import Header from "@/components/Header";
import Work from "@/components/Work";
import About from "@/components/About";
import Info from "@/components/Info";
import Footer from "@/components/Footer";

const raleway = Raleway({ subsets: ["latin"] });
const fraunces = Fraunces({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    const circularCursor = document.getElementById("circularcursor");

    const handleMouseMove = (e: any) => {
      circularCursor.style.left = e.pageX + "px";
      circularCursor.style.top = e.pageY + "px";
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const changeCursorColor = (color) => {
    const circularCursor = document.getElementById("circularcursor");
    if (color === "hover") {
      circularCursor.classList.add("circularcursor-hover");
    } else {
      circularCursor.classList.remove("circularcursor-hover");
    }
  };
  return (
    <main
      className={`flex min-h-screen flex-col items-center py-24 px-32 ${raleway.className}`}
    >
      <div id="circularcursor"> </div>
      <div
        id="myHoverDiv"
        className="hoverable-div"
        onMouseOver={() => changeCursorColor("hover")}
        onMouseLeave={() => changeCursorColor("default")}
      ></div>
      <Nav changeCursorColor={changeCursorColor} />
      <Header fraunces={fraunces} />
      <Work fraunces={fraunces} />
      <About fraunces={fraunces} />
      <Info fraunces={fraunces} />
      <Footer />
      <svg width="0" height="0">
        <filter id="grainy-blur" x="-150%" y="-150%" width="400%" height="400%">
          <feGaussianBlur stdDeviation="49" result="blur" />
        </filter>
      </svg>
    </main>
  );
}
