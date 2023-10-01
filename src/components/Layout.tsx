import { Raleway } from "next/font/google";
import React, { useEffect, ReactNode } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

interface LayoutProps {
  children: ReactNode;
}

const raleway = Raleway({ subsets: ["latin"], display: "swap" });

const Layout: React.FC<LayoutProps> = ({ children }) => {
  useEffect(() => {
    const interBubble = document.querySelector<HTMLDivElement>(".interactive")!;
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    function move() {
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;
      interBubble.style.transform = `translate(${Math.round(
        curX
      )}px, ${Math.round(curY)}px)`;
      requestAnimationFrame(() => {
        move();
      });
    }

    const handleMouseMove = (event: MouseEvent | TouchEvent) => {
      if (event instanceof MouseEvent) {
        tgX = event.clientX;
        tgY = event.clientY;
      } else if (event instanceof TouchEvent) {
        const touch = event.touches[0];
        tgX = touch.clientX;
        tgY = touch.clientY;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleMouseMove);

    move();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleMouseMove);
    };
  }, []);

  return (
    <main className={`${raleway.className} flex flex-col min-h-screen py-24`}>
      <div className="text-container">
        <Nav />

        <div className="flex flex-col md:w-screen w-[125vw]">
          {children}
          <Footer />
        </div>
      </div>
      <div className="gradient-bg">
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <div className="gradients-container">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
          <div className="g4"></div>
          <div className="g5"></div>
          <div className="interactive"></div>
        </div>
      </div>
    </main>
  );
};

export default Layout;
