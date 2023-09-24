import Image from "next/image";
import { Raleway, Fraunces } from "next/font/google";

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
    <main
      className={`flex min-h-screen flex-col items-center py-24 px-32 ${raleway.className}`}
    >
      <Nav />
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
      <div className="cursor"></div>
      <div className="cursor-border"></div>
    </main>
  );
}
