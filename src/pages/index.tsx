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
  return (
    <main className={`flex flex-col min-h-screen py-24 ${raleway.className}`}>
      <Nav />
      <div className="flex flex-col md:w-screen w-[125vw]">
        <Header fraunces={fraunces} />
        <Work fraunces={fraunces} />
        <About fraunces={fraunces} />
        {/* <Info fraunces={fraunces} /> */}
        <Footer />
      </div>

      <svg width="0" height="0">
        <filter id="grainy-blur" x="-150%" y="-150%" width="400%" height="400%">
          <feGaussianBlur stdDeviation="39" result="blur" />
        </filter>
      </svg>
    </main>
  );
}
